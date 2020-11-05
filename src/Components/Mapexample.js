import { dbService } from "fbase";
import React, { useEffect, useState } from "react"

const { kakao } = window
const Map = ({ searchPlace,userObj }) => {
    let infowindow = new kakao.maps.InfoWindow({zIndex:1});
    const [location,setLocation] = useState("");
    const [lat,setLat] = useState("");
    const [lng,setLng] = useState("");
    const [edit,setEdit] = useState(false);

    const onSubmit = async(event) => {
        if((lat === "") || (lng === "")){
            return;
        }
        event.preventDefault();
        if(edit){
            // 위치를 수정하는 로직
            await dbService.doc(`user/${userObj.id}`).update({
                lat,
                lng
            });
            
        } else {
            // 위치 정보를 처음 추가하는 로직
            const user = {
                userId: userObj.uid,
                lat,
                lng,
                createdAt: Date.now(),
            }
            await dbService.collection("user").add(user);
        }

        setLat("");
        setLng("");
        setLocation("");
    }

    useEffect(() => {
        const container = document.getElementById("mymap");
        
        let userLocation;
        if (userObj.lat === "" || userObj.lng === ""){
            userLocation = new kakao.maps.LatLng(33.450701, 126.570667);
            console.log("기본맵을출력");
        } else {
            userLocation =new kakao.maps.LatLng(
                userObj.lat,
                userObj.lng
                );
            console.log("사용자의 위치를 중심으로");
            // 사용자는 이미 위치를 저장했으니 수정모드로 변환한다!
            setEdit(true);
        }
        
        const options = {
            center: userLocation,
            level: 3,
            };
       
        const map = new kakao.maps.Map(container, options);

        // 장소 검색 객체를 생성
        const ps = new kakao.maps.services.Places(); 

        // 키워드로 장소를 검색
        ps.keywordSearch(searchPlace, placesSearchCB);

        // 키워드 검색 완료 시 호출되는 콜백함수
        function placesSearchCB (data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가
                let bounds = new kakao.maps.LatLngBounds();

                for (let i=0; i<data.length; i++) {
                    displayMarker(data[i]);    
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }       

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정
                map.setBounds(bounds);
            } 
        }
        
        // 지도에 마커를 표시하는 함수
        function displayMarker(place) {
            
            // 마커를 생성하고 지도에 표시
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x) 
            });
        

            // 클릭이벤트
            kakao.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                infowindow.open(map, marker);

                // 위치 정보 등록
                setLocation(place.place_name);
                setLat(marker.getPosition().getLat());
                setLng(marker.getPosition().getLng());
            });
            kakao.maps.event.addListener(marker, 'mouseover', function() {
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                infowindow.open(map, marker);
            });
            kakao.maps.event.addListener(marker, 'mouseout', function() {
                infowindow.close();
            });
            

        }
        console.log(userObj);
    }, [searchPlace])
    
    
    
  return (
      <>
        <h1>위치정보 입력 Form</h1>
         <form onSubmit={onSubmit}>
             <input type="text" value={location} readOnly required/>
             {edit ? (
                <input type="submit" value="현재 위치로 수정"/>
             ) : (
                <input type="submit" value="해당위치 저장(현재저장x)"/>
             )
            }  
         </form>
        <div 
         id="mymap"
         style={{ 
                width: '700px', 
                height: '500px'
         }}
        />
        <br></br>

     </>
  );
}
export default Map;