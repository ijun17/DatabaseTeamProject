const TEST_DATASET=[
    //0 스타포스 강화
    [
        { success: 1, fail: 0 },
        { success: 1, fail: 0 },
        { success: 0, fail: 1 },
        { success: 1, fail: 1 },
        { success: 1, fail: 0 },
        { success: 1, fail: 0 },
        { success: 1, fail: 1 },
        { success: 1, fail: 3 },
        { success: 1, fail: 1 },
        { success: 1, fail: 5 },
        { success: 0, fail: 0 },
        { success: 1, fail: 1 },
        { success: 0, fail: 2 },
        { success: 1, fail: 1 },
        { success: 1, fail: 0 },
        { success: 18, fail: 40 },
        { success: 6, fail: 13 },
        { success: 0, fail: 0 },
        { success: 0, fail: 0 },
        { success: 0, fail: 0 },
        { success: 1, fail: 8 },
        { success: 0, fail: 0 },
        { success: 0, fail: 0 },
        { success: 0, fail: 0 },
        { success: 0, fail: 0 }
    ],


    //1 스타포스 강화 파괴방지
    [
        [
            { success: 0, fail: 0 },
            { success: 0, fail: 0 },
            { success: 0, fail: 0 },
            { success: 0, fail: 0 },
            { success: 0, fail: 0 },
            { success: 0, fail: 0 },
            { success: 0, fail: 0 },
            { success: 0, fail: 0 },
            { success: 0, fail: 0 },
            { success: 0, fail: 0 },
            { success: 0, fail: 0 },
            { success: 0, fail: 0 },
            { success: 0, fail: 0 },
            { success: 0, fail: 0 },
            { success: 0, fail: 0 },
            { success: 18, fail: 40 },
            { success: 6, fail: 13 },
            { success: 0, fail: 0 },
            { success: 0, fail: 0 },
            { success: 0, fail: 0 },
            { success: 0, fail: 0 },
            { success: 0, fail: 0 },
            { success: 0, fail: 0 },
            { success: 0, fail: 0 },
            { success: 0, fail: 0 }
        ],
        [
            { success: 0, fail: 0 }, { success: 0, fail: 0 },
            { success: 0, fail: 0 }, { success: 0, fail: 0 },
            { success: 0, fail: 0 }, { success: 0, fail: 0 },
            { success: 0, fail: 0 }, { success: 0, fail: 0 },
            { success: 0, fail: 0 }, { success: 0, fail: 0 },
            { success: 0, fail: 0 }, { success: 0, fail: 0 },
            { success: 0, fail: 0 }, { success: 0, fail: 0 },
            { success: 0, fail: 0 }, { success: 0, fail: 0 },
            { success: 0, fail: 0 }, { success: 0, fail: 0 },
            { success: 0, fail: 0 }, { success: 0, fail: 0 },
            { success: 1, fail: 8 }, { success: 0, fail: 0 },
            { success: 0, fail: 0 }, { success: 0, fail: 0 },
            { success: 0, fail: 0 }
        ]
    ],

    //2 스크롤 강화
    [
        { success: 29, fail: 29 },
        { success: 64, fail: 64 },
        { success: 24, fail: 24 }
    ],

    //3 스크롤 강화 파괴방지
    [
        [
            { success: 0, fail: 0 },
            { success: 0, fail: 0 },
            { success: 0, fail: 0 }
        ],
        [
            { success: 29, fail: 29 },
            { success: 63, fail: 63 },
            { success: 0, fail: 0 }
        ]
    ],

    //4 장비 아이템 획득
    [
        { itemName: '파워엘릭서', getCount: 46 },
        { itemName: '이노센트 주문서 50%', getCount: 20 },  
        { itemName: '레전드 드래곤 스태프', getCount: 9 },  
        { itemName: '레전드 드래곤 세인트', getCount: 8 },  
        { itemName: '레전드 드래곤 카라벨라', getCount: 8 },
        { itemName: '레전드 드래곤 샤인보우', getCount: 8 },
        { itemName: '로얄 블랙메탈 숄더', getCount: 8 },    
        { itemName: '데아 시두스 이어링', getCount: 7 },    
        { itemName: '실버블라썸 링', getCount: 7 },
        { itemName: '발록 자석펫', getCount: 7 },
        { itemName: '이노센트 주문서 100%', getCount: 7 },  
        { itemName: '레전드 드래곤 크리스', getCount: 5 },  
        { itemName: '매커네이터 팬던트', getCount: 5 },     
        { itemName: '응축된 힘의 결정석', getCount: 5 },
        { itemName: '아쿠아틱 레터 눈장식', getCount: 4 },
        { itemName: '캐스터스', getCount: 4 },
        { itemName: '자쿰의 포이즈닉 건', getCount: 3 },
        { itemName: '장미꽃', getCount: 3 },
        { itemName: '메투스', getCount: 2 },
        { itemName: '자쿰의 포이즈닉 보우', getCount: 2 },
        { itemName: '자쿰의 포이즈닉 완드', getCount: 2 },
        { itemName: '카오스 혼테일의 목걸이', getCount: 2 },
        { itemName: '피스메이커', getCount: 2 },
        { itemName: '블랙 네오 바지', getCount: 1 },
        { itemName: '타임리스 문라이트', getCount: 1 },
        { itemName: '자쿰의 포이즈닉 대거', getCount: 1 },
        { itemName: '도미네이터 팬던트', getCount: 1 },
        { itemName: '타임리스 휀넬', getCount: 1 },
        { itemName: '타임리스 타라곤', getCount: 1 },
        { itemName: '골드 메이플리프 엠블렘', getCount: 1 },
        { itemName: '연습용 신발', getCount: 1 }
    ],

    //5 소비아이템 획득
    [
        { itemName: '주문서 상자', getCount: 3118 },
        { itemName: '3층스킬박스10개', getCount: 1866 },       
        { itemName: '주문의 흔적', getCount: 1478 },
        { itemName: '수상한 큐브', getCount: 1298 },
        { itemName: '시간 조각', getCount: 1229 },
        { itemName: '보스 망치', getCount: 1009 },
        { itemName: '하이퍼스킬박스10', getCount: 929 },       
        { itemName: '혼돈의 주문서 100%', getCount: 437 },     
        { itemName: '악마의 주문서 70%', getCount: 286 },      
        { itemName: '3층무기상자', getCount: 126 },
        { itemName: '수상한 미라클 큐브', getCount: 61 },      
        { itemName: '프로텍트 쉴드', getCount: 59 },
        { itemName: '신비한 악마의 주문서 90%', getCount: 55 },
        { itemName: '혼테일의 비늘', getCount: 47 },
        { itemName: '혼테일무기상자', getCount: 25 },
        { itemName: '혼테일보스장신구상자', getCount: 22 },
        { itemName: '이노센트 주문서 50%', getCount: 13 },
        { itemName: '이노센트 주문서 100%', getCount: 7 },
        { itemName: '프로텍트 쉴드 헌드레드', getCount: 3 },
        { itemName: '티타니아 자석펫 상자', getCount: 3 },
        { itemName: '1층스킬박스10개', getCount: 2 },
        { itemName: '3층스킬박스100개', getCount: 2 },
        { itemName: '2층스킬박스100개', getCount: 1 },
        { itemName: '2층스킬박스10개', getCount: 1 },
        { itemName: '발록 자석펫 상자', getCount: 1 }
    ],

    //6 소비아이템 사용
    [
        { itemName: '수상한 큐브', getCount: 2209 },
        { itemName: '주문서 상자', getCount: 393 },
        { itemName: '수상한 미라클 큐브', getCount: 321 },     
        { itemName: '프로텍트 쉴드', getCount: 106 },
        { itemName: '신비한 악마의 주문서 90%', getCount: 95 },
        { itemName: '3층스킬박스10개', getCount: 69 },
        { itemName: '악마의 주문서 70%', getCount: 68 },       
        { itemName: '미라클 큐브', getCount: 40 },
        { itemName: '하이퍼스킬박스10', getCount: 37 },        
        { itemName: '사냥 망치', getCount: 21 },
        { itemName: '이노센트 주문서 50%', getCount: 20 },     
        { itemName: '3층무기상자', getCount: 11 },
        { itemName: '혼돈의 주문서 100%', getCount: 11 },      
        { itemName: '혼테일무기상자', getCount: 10 },
        { itemName: '혼테일의 비늘', getCount: 9 },
        { itemName: '혼테일보스장신구상자', getCount: 9 },
        { itemName: '시간 조각', getCount: 8 },
        { itemName: '이노센트 주문서 100%', getCount: 7 },
        { itemName: '주문의 흔적', getCount: 6 },
        { itemName: '보스 망치', getCount: 5 },
        { itemName: '프로텍트 쉴드 헌드레드', getCount: 3 },
        { itemName: '발록 자석펫 상자', getCount: 2 },
        { itemName: '3층스킬박스100개', getCount: 2 },
        { itemName: '2층스킬박스100개', getCount: 1 },
        { itemName: '2층스킬박스10개', getCount: 1 },
        { itemName: '1층스킬박스10개', getCount: 1 },
        { itemName: '미라클 더블 식스팩', getCount: 1 }
    ],

    //7월드 아이템 구매
    []
      
]