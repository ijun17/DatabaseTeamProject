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
        { itemName: '최강 요원 슈트', getCount: 8 },        
        { itemName: '메이플 기념모자', getCount: 6 },       
        { itemName: '발록 자석펫', getCount: 4 },
        { itemName: '연습용 신발', getCount: 3 },
        { itemName: 'IronSword', getCount: 3 },
        { itemName: '초보 마법사의 완드', getCount: 3 },    
        { itemName: '파란색 가운', getCount: 2 },
        { itemName: '티타니아 자석펫', getCount: 2 },       
        { itemName: '장어구이', getCount: 1 },
        { itemName: '베테랑 크로스 숄더', getCount: 1 },    
        { itemName: '레드 오리엔타이칸 모자', getCount: 1 },
        { itemName: '베인활', getCount: 1 },
        { itemName: '미스릴 브리스트', getCount: 1 },       
        { itemName: '베인아대', getCount: 1 }
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