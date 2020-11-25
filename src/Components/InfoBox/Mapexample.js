import { dbService } from "fbase";
import React, { useEffect, useState } from "react"
import "./index.scss";

const { kakao } = window
const Map = ({ searchPlace,userObj }) => {
    let infowindow = new kakao.maps.InfoWindow({zIndex:1});
    const [location,setLocation] = useState("");
    const [lat,setLat] = useState("");
    const [lng,setLng] = useState("");

    const onSubmit = async(event) => {
        if((lat === "") || (lng === "")){
            return;
        }
        event.preventDefault();
        
        await dbService.doc(`user/${userObj.id}`).update({
            lat,
            lng
        });
        setLat("");
        setLng("");
        setLocation("");
    }

    useEffect(() => {
        const container = document.getElementById("mymap");
        let userLocation;
        
        if (userObj.lat === null || userObj.lng === null){
            userLocation = new kakao.maps.LatLng(33.450701, 126.570667);
            console.log("기본맵을출력");
        } else {
            userLocation =new kakao.maps.LatLng(
                userObj.lat,
                userObj.lng
                );
            console.log("사용자의 위치를 중심으로");
            console.log(userObj.lat);
            console.log(userObj.lng);
        }
        
        const options = {
            center: userLocation,
            level: 3,
            };
       
        const map = new kakao.maps.Map(container, options);

        // 장소 검색 객체를 생성
        const ps = new kakao.maps.services.Places(); 

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

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
        /*
        // 주소 가져오는 부분
        kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
            searchDetailAddrFromCoords(mouseEvent.latLng, function(result, status) {
                if (status === kakao.maps.services.Status.OK) {
                    var detailAddr = !!result[0].road_address ? '<div>도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
                    detailAddr += '<div>지번 주소 : ' + result[0].address.address_name + '</div>';
                    
                    var content = '<div class="bAddr">' +
                                    '<span class="title">법정동 주소정보</span>' + 
                                    detailAddr + 
                                '</div>';
        
                    // 마커를 클릭한 위치에 표시합니다 
                    marker.setPosition(mouseEvent.latLng);
                    marker.setMap(map);
        
                    // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
                    infowindow.setContent(content);
                    infowindow.open(map, marker);
                }   
            });
        });
        */
        // 지도에 마커를 표시하는 함수
        function displayMarker(place) {
            
            // 마커를 생성하고 지도에 표시
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x) 
            });
        

            // 클릭이벤트
            kakao.maps.event.addListener(marker, 'click', function(mouseEvent) {
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
        function searchDetailAddrFromCoords(coords, callback) {
            // 좌표로 법정동 상세 주소 정보를 요청합니다
            geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        }
    }, [searchPlace])
    
  return (
      <>
        <div className="InfoBox__input">
            <div className="InfoBox__input__address"><input/> - <button>우편번호</button></div>
                <input/><span>기본주소</span><br/>
                <input/><span>나머지 주소</span>
            
            <form onSubmit={onSubmit}>
                <input type="text" value={location} readOnly required/>
                <input type="submit" value="현재 위치로 저장"/>
            </form>
            <div 
            id="mymap"
            style={{ 
                    width: '700px', 
                    height: '500px'
            }}
            />
            <br></br>
        </div>
     </>
  );
}
export default Map;