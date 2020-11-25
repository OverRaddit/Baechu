import React, { useEffect, useState } from 'react';


const { kakao } = window


const Distance = ({ userObj, clubObj}) => {
    const [distance,setDistance] = useState("");

    useEffect(()=> {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
        mapOption = { 
        center: new kakao.maps.LatLng(33.452344169439975, 126.56878163224233), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
        };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        var linePath = [
            // 하나는 사용자의 위치정보
            new kakao.maps.LatLng(33.452344169439975, 126.56878163224233),

            // 나머지 하나는 해당 동아리의 위치정보
            new kakao.maps.LatLng(33.452739313807456, 126.5709308145358)
        ];

        var polyline = new kakao.maps.Polyline({
            path: linePath, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 5, // 선의 두께 입니다
            strokeColor: '#FFAE00', // 선의 색깔입니다
            strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
        });
        //polyline.setMap(map);

        var distance = polyline.getLength();
        console.log(distance);
        setDistance(distance);
    },[]);

    return (
        <div>
            <div id="map" style={{width:"100%",height:"350px" }}></div>  
            <p>
                <em>지도를 마우스로 클릭하면 선 그리기가 시작되고<br/>오른쪽 마우스를 클릭하면 선 그리기가 종료됩니다</em>
            </p>
            {distance} 이다!
        </div>
    );
}

export default Distance;