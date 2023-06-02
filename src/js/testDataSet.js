const TEST_DATASET=[
    //0 스타포스 강화
    [
        { success: 186, fail: 13, breaks: 0 }, 
        { success: 172, fail: 20, breaks: 0 }, 
        { success: 167, fail: 34, breaks: 0 }, 
        { success: 163, fail: 34, breaks: 0 }, 
        { success: 167, fail: 38, breaks: 0 }, 
        { success: 166, fail: 39, breaks: 0 }, 
        { success: 162, fail: 66, breaks: 0 }, 
        { success: 155, fail: 89, breaks: 0 }, 
        { success: 157, fail: 110, breaks: 0 },
        { success: 162, fail: 135, breaks: 0 },
        { success: 155, fail: 147, breaks: 0 },
        { success: 151, fail: 212, breaks: 0 },
        { success: 152, fail: 235, breaks: 0 },
        { success: 146, fail: 235, breaks: 0 },
        { success: 144, fail: 293, breaks: 0 },
        { success: 274, fail: 554, breaks: 0 },
        { success: 124, fail: 209, breaks: 5 },
        { success: 51, fail: 79, breaks: 4 },
        { success: 28, fail: 33, breaks: 2 },
        { success: 12, fail: 18, breaks: 1 },
        { success: 23, fail: 41, breaks: 0 },
        { success: 9, fail: 17, breaks: 0 },
        { success: 0, fail: 7, breaks: 1 },
        { success: 0, fail: 0, breaks: 0 },
        { success: 0, fail: 0, breaks: 0 }
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
            { success: 1, fail: 8 }
        ]
    ],

    //2 스크롤 강화
    [
        { success: 30, fail: 0, breaks: 13 },
        { success: 62, fail: 0, breaks: 6 }, 
        { success: 92, fail: 81, breaks: 0 } 
    ],

    //3 스크롤 강화 파괴방지
    [
        { success: 130, fail: 41 },
        { success: 341, fail: 40 },
        { success: 0, fail: 0 }    
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
    [
        '골드애플',
        [ 0, 0, 1696, 1615, 1676, 155 ],
        [ 0, 0, 169600, 161500, 167600, 15500 ],
        '미라클 더블 식스팩',
        [ 0, 0, 1799, 1711, 1199, 63 ],
        [ 0, 0, 359800, 342200, 239800, 12600 ],
        '미라클 큐브',
        [ 0, 0, 228, 182, 124, 0 ],
        [ 0, 0, 4560, 3640, 2480, 0 ],
        '루나 위습의 원더베리',
        [ 0, 0, 153, 203, 207, 2 ],
        [ 0, 0, 61200, 81200, 82800, 800 ],
        '2층스킬박스100개',
        [ 0, 0, 248, 137, 134, 0 ],
        [ 0, 0, 19840, 10960, 10720, 0 ],
        '프로텍트 쉴드 헌드레드',
        [ 0, 0, 67, 112, 273, 19 ],
        [ 0, 0, 13400, 22400, 54600, 3800 ],
        '4차종합스킬박스100개',
        [ 0, 0, 68, 15, 266, 0 ],
        [ 0, 0, 13600, 3000, 53200, 0 ],
        '1층스킬박스100개',
        [ 0, 0, 146, 48, 103, 0 ],
        [ 0, 0, 11680, 3840, 8240, 0 ],
        'EXP 기상효과',
        [ 0, 0, 0, 0, 201, 1 ],
        [ 0, 0, 0, 0, 10050, 50 ],
        '위습의 원더베리',
        [ 0, 0, 111, 51, 28, 0 ],
        [ 0, 0, 22200, 10200, 5600, 0 ],
        'EXP 쿠폰',
        [ 0, 0, 0, 0, 138, 0 ],
        [ 0, 0, 0, 0, 20700, 0 ],
        '파워엘릭서 10개',
        [ 0, 0, 0, 16, 93, 21 ],
        [ 0, 0, 0, 6400, 37200, 8400 ],
        '종합스킬박스500개',
        [ 0, 0, 35, 31, 33, 0 ],
        [ 0, 0, 8750, 7750, 8250, 0 ],
        '주문서 알뜰 패키지',
        [ 0, 0, 23, 36, 36, 2 ],
        [ 0, 0, 11500, 18000, 18000, 1000 ],
        '하이퍼스킬박스100',
        [ 0, 0, 14, 11, 8, 0 ],
        [ 0, 0, 5600, 4400, 3200, 0 ],
        '하이퍼스킬박스50',
        [ 0, 0, 6, 28, 0, 0 ],
        [ 0, 0, 1440, 6720, 0, 0 ],
        '확성기',
        [ 0, 0, 0, 0, 24, 1 ],
        [ 0, 0, 0, 0, 240, 10 ],
        '돌의정령 영구 자석펫 상자',
        [ 0, 0, 8, 3, 3, 1 ],
        [ 0, 0, 38400, 14400, 14400, 4800 ],
        '플래티넘 카르마 가위',
        [ 0, 0, 0, 8, 4, 0 ],
        [ 0, 0, 0, 4800, 2400, 0 ],
        '하이퍼스킬박스500',
        [ 0, 0, 2, 0, 4, 0 ],
        [ 0, 0, 3200, 0, 6400, 0 ]
    ]
]