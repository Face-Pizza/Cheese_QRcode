//src/compononts.getPhoto.jsx
import React, { useState, useEffect } from 'react'
import * as G from '../style/getStyle';
import { getQRCode } from '../api/apiService';
import { useParams } from 'react-router-dom';

const GetPhoto = () => { 
    const { id } = useParams(); // useParams을 이용하여 URL 매개변수에서 id를 추출
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        console.log(id);
        const fetchPhotoAndQR = async () => {
            try {
                const data = await getQRCode(id);  // API 요청
                setPhotoData(data);  // 받아온 데이터 저장
            } catch (error) {
                console.error('Error fetching photo and QR code:', error);
            }
        };

        if (id) {
            fetchPhotoAndQR();
        }
    }, [id]);

    if (!photoData) {
        return <div>Loading...</div>;  // 데이터를 불러오는 중일 때 표시
    }

    return (
        <>  
            <G.GetPhoto>
                <h2>사진을 다운로드 하세요</h2>
                {/* 받아온 photo URL로 이미지 출력 */}
                <G.FourCutPhoto src={photoData.photo} alt="Fetched from server" />
                
                {/* 다운로드하기 버튼 */}
                <a href={photoData.photo} download>
                    <button>사진 다운로드하기</button>
                </a>

                {/* QR 코드 표시 */}
                {/* <img src={photoData.qr_code} alt="QR Code" /> */}
            </G.GetPhoto>
        </>
    );
};

export default GetPhoto;