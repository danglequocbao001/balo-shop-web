const districts = [
  {
    value: "001",
    label: "Quận Ba Đình",
    parent_code: "01",
  },
  {
    value: "002",
    label: "Quận Hoàn Kiếm",
    parent_code: "01",
  },
  {
    value: "003",
    label: "Quận Tây Hồ",
    parent_code: "01",
  },
  {
    value: "004",
    label: "Quận Long Biên",
    parent_code: "01",
  },
  {
    value: "005",
    label: "Quận Cầu Giấy",
    parent_code: "01",
  },
  {
    value: "006",
    label: "Quận Đống Đa",
    parent_code: "01",
  },
  {
    value: "007",
    label: "Quận Hai Bà Trưng",
    parent_code: "01",
  },
  {
    value: "008",
    label: "Quận Hoàng Mai",
    parent_code: "01",
  },
  {
    value: "009",
    label: "Quận Thanh Xuân",
    parent_code: "01",
  },
  {
    value: "016",
    label: "Huyện Sóc Sơn",
    parent_code: "01",
  },
  {
    value: "017",
    label: "Huyện Đông Anh",
    parent_code: "01",
  },
  {
    value: "018",
    label: "Huyện Gia Lâm",
    parent_code: "01",
  },
  {
    value: "019",
    label: "Quận Nam Từ Liêm",
    parent_code: "01",
  },
  {
    value: "020",
    label: "Huyện Thanh Trì",
    parent_code: "01",
  },
  {
    value: "021",
    label: "Quận Bắc Từ Liêm",
    parent_code: "01",
  },
  {
    value: "250",
    label: "Huyện Mê Linh",
    parent_code: "01",
  },
  {
    value: "268",
    label: "Quận Hà Đông",
    parent_code: "01",
  },
  {
    value: "269",
    label: "Thị xã Sơn Tây",
    parent_code: "01",
  },
  {
    value: "271",
    label: "Huyện Ba Vì",
    parent_code: "01",
  },
  {
    value: "272",
    label: "Huyện Phúc Thọ",
    parent_code: "01",
  },
  {
    value: "273",
    label: "Huyện Đan Phượng",
    parent_code: "01",
  },
  {
    value: "274",
    label: "Huyện Hoài Đức",
    parent_code: "01",
  },
  {
    value: "275",
    label: "Huyện Quốc Oai",
    parent_code: "01",
  },
  {
    value: "276",
    label: "Huyện Thạch Thất",
    parent_code: "01",
  },
  {
    value: "277",
    label: "Huyện Chương Mỹ",
    parent_code: "01",
  },
  {
    value: "278",
    label: "Huyện Thanh Oai",
    parent_code: "01",
  },
  {
    value: "279",
    label: "Huyện Thường Tín",
    parent_code: "01",
  },
  {
    value: "280",
    label: "Huyện Phú Xuyên",
    parent_code: "01",
  },
  {
    value: "281",
    label: "Huyện Ứng Hòa",
    parent_code: "01",
  },
  {
    value: "282",
    label: "Huyện Mỹ Đức",
    parent_code: "01",
  },
  {
    value: "024",
    label: "Thành phố Hà Giang",
    parent_code: "02",
  },
  {
    value: "026",
    label: "Huyện Đồng Văn",
    parent_code: "02",
  },
  {
    value: "027",
    label: "Huyện Mèo Vạc",
    parent_code: "02",
  },
  {
    value: "028",
    label: "Huyện Yên Minh",
    parent_code: "02",
  },
  {
    value: "029",
    label: "Huyện Quản Bạ",
    parent_code: "02",
  },
  {
    value: "030",
    label: "Huyện Vị Xuyên",
    parent_code: "02",
  },
  {
    value: "031",
    label: "Huyện Bắc Mê",
    parent_code: "02",
  },
  {
    value: "032",
    label: "Huyện Hoàng Su Phì",
    parent_code: "02",
  },
  {
    value: "033",
    label: "Huyện Xín Mần",
    parent_code: "02",
  },
  {
    value: "034",
    label: "Huyện Bắc Quang",
    parent_code: "02",
  },
  {
    value: "035",
    label: "Huyện Quang Bình",
    parent_code: "02",
  },
  {
    value: "040",
    label: "Thành phố Cao Bằng",
    parent_code: "04",
  },
  {
    value: "042",
    label: "Huyện Bảo Lâm",
    parent_code: "04",
  },
  {
    value: "043",
    label: "Huyện Bảo Lạc",
    parent_code: "04",
  },
  {
    value: "045",
    label: "Huyện Hà Quảng",
    parent_code: "04",
  },
  {
    value: "047",
    label: "Huyện Trùng Khánh",
    parent_code: "04",
  },
  {
    value: "048",
    label: "Huyện Hạ Lang",
    parent_code: "04",
  },
  {
    value: "049",
    label: "Huyện Quảng Hòa",
    parent_code: "04",
  },
  {
    value: "051",
    label: "Huyện Hoà An",
    parent_code: "04",
  },
  {
    value: "052",
    label: "Huyện Nguyên Bình",
    parent_code: "04",
  },
  {
    value: "053",
    label: "Huyện Thạch An",
    parent_code: "04",
  },
  {
    value: "058",
    label: "Thành Phố Bắc Kạn",
    parent_code: "06",
  },
  {
    value: "060",
    label: "Huyện Pác Nặm",
    parent_code: "06",
  },
  {
    value: "061",
    label: "Huyện Ba Bể",
    parent_code: "06",
  },
  {
    value: "062",
    label: "Huyện Ngân Sơn",
    parent_code: "06",
  },
  {
    value: "063",
    label: "Huyện Bạch Thông",
    parent_code: "06",
  },
  {
    value: "064",
    label: "Huyện Chợ Đồn",
    parent_code: "06",
  },
  {
    value: "065",
    label: "Huyện Chợ Mới",
    parent_code: "06",
  },
  {
    value: "066",
    label: "Huyện Na Rì",
    parent_code: "06",
  },
  {
    value: "070",
    label: "Thành phố Tuyên Quang",
    parent_code: "08",
  },
  {
    value: "071",
    label: "Huyện Lâm Bình",
    parent_code: "08",
  },
  {
    value: "072",
    label: "Huyện Na Hang",
    parent_code: "08",
  },
  {
    value: "073",
    label: "Huyện Chiêm Hóa",
    parent_code: "08",
  },
  {
    value: "074",
    label: "Huyện Hàm Yên",
    parent_code: "08",
  },
  {
    value: "075",
    label: "Huyện Yên Sơn",
    parent_code: "08",
  },
  {
    value: "076",
    label: "Huyện Sơn Dương",
    parent_code: "08",
  },
  {
    value: "080",
    label: "Thành phố Lào Cai",
    parent_code: "10",
  },
  {
    value: "082",
    label: "Huyện Bát Xát",
    parent_code: "10",
  },
  {
    value: "083",
    label: "Huyện Mường Khương",
    parent_code: "10",
  },
  {
    value: "084",
    label: "Huyện Si Ma Cai",
    parent_code: "10",
  },
  {
    value: "085",
    label: "Huyện Bắc Hà",
    parent_code: "10",
  },
  {
    value: "086",
    label: "Huyện Bảo Thắng",
    parent_code: "10",
  },
  {
    value: "087",
    label: "Huyện Bảo Yên",
    parent_code: "10",
  },
  {
    value: "088",
    label: "Thị xã Sa Pa",
    parent_code: "10",
  },
  {
    value: "089",
    label: "Huyện Văn Bàn",
    parent_code: "10",
  },
  {
    value: "094",
    label: "Thành phố Điện Biên Phủ",
    parent_code: "11",
  },
  {
    value: "095",
    label: "Thị Xã Mường Lay",
    parent_code: "11",
  },
  {
    value: "096",
    label: "Huyện Mường Nhé",
    parent_code: "11",
  },
  {
    value: "097",
    label: "Huyện Mường Chà",
    parent_code: "11",
  },
  {
    value: "098",
    label: "Huyện Tủa Chùa",
    parent_code: "11",
  },
  {
    value: "099",
    label: "Huyện Tuần Giáo",
    parent_code: "11",
  },
  {
    value: "100",
    label: "Huyện Điện Biên",
    parent_code: "11",
  },
  {
    value: "101",
    label: "Huyện Điện Biên Đông",
    parent_code: "11",
  },
  {
    value: "102",
    label: "Huyện Mường Ảng",
    parent_code: "11",
  },
  {
    value: "103",
    label: "Huyện Nậm Pồ",
    parent_code: "11",
  },
  {
    value: "105",
    label: "Thành phố Lai Châu",
    parent_code: "12",
  },
  {
    value: "106",
    label: "Huyện Tam Đường",
    parent_code: "12",
  },
  {
    value: "107",
    label: "Huyện Mường Tè",
    parent_code: "12",
  },
  {
    value: "108",
    label: "Huyện Sìn Hồ",
    parent_code: "12",
  },
  {
    value: "109",
    label: "Huyện Phong Thổ",
    parent_code: "12",
  },
  {
    value: "110",
    label: "Huyện Than Uyên",
    parent_code: "12",
  },
  {
    value: "111",
    label: "Huyện Tân Uyên",
    parent_code: "12",
  },
  {
    value: "112",
    label: "Huyện Nậm Nhùn",
    parent_code: "12",
  },
  {
    value: "116",
    label: "Thành phố Sơn La",
    parent_code: "14",
  },
  {
    value: "118",
    label: "Huyện Quỳnh Nhai",
    parent_code: "14",
  },
  {
    value: "119",
    label: "Huyện Thuận Châu",
    parent_code: "14",
  },
  {
    value: "120",
    label: "Huyện Mường La",
    parent_code: "14",
  },
  {
    value: "121",
    label: "Huyện Bắc Yên",
    parent_code: "14",
  },
  {
    value: "122",
    label: "Huyện Phù Yên",
    parent_code: "14",
  },
  {
    value: "123",
    label: "Huyện Mộc Châu",
    parent_code: "14",
  },
  {
    value: "124",
    label: "Huyện Yên Châu",
    parent_code: "14",
  },
  {
    value: "125",
    label: "Huyện Mai Sơn",
    parent_code: "14",
  },
  {
    value: "126",
    label: "Huyện Sông Mã",
    parent_code: "14",
  },
  {
    value: "127",
    label: "Huyện Sốp Cộp",
    parent_code: "14",
  },
  {
    value: "128",
    label: "Huyện Vân Hồ",
    parent_code: "14",
  },
  {
    value: "132",
    label: "Thành phố Yên Bái",
    parent_code: "15",
  },
  {
    value: "133",
    label: "Thị xã Nghĩa Lộ",
    parent_code: "15",
  },
  {
    value: "135",
    label: "Huyện Lục Yên",
    parent_code: "15",
  },
  {
    value: "136",
    label: "Huyện Văn Yên",
    parent_code: "15",
  },
  {
    value: "137",
    label: "Huyện Mù Căng Chải",
    parent_code: "15",
  },
  {
    value: "138",
    label: "Huyện Trấn Yên",
    parent_code: "15",
  },
  {
    value: "139",
    label: "Huyện Trạm Tấu",
    parent_code: "15",
  },
  {
    value: "140",
    label: "Huyện Văn Chấn",
    parent_code: "15",
  },
  {
    value: "141",
    label: "Huyện Yên Bình",
    parent_code: "15",
  },
  {
    value: "148",
    label: "Thành phố Hòa Bình",
    parent_code: "17",
  },
  {
    value: "150",
    label: "Huyện Đà Bắc",
    parent_code: "17",
  },
  {
    value: "152",
    label: "Huyện Lương Sơn",
    parent_code: "17",
  },
  {
    value: "153",
    label: "Huyện Kim Bôi",
    parent_code: "17",
  },
  {
    value: "154",
    label: "Huyện Cao Phong",
    parent_code: "17",
  },
  {
    value: "155",
    label: "Huyện Tân Lạc",
    parent_code: "17",
  },
  {
    value: "156",
    label: "Huyện Mai Châu",
    parent_code: "17",
  },
  {
    value: "157",
    label: "Huyện Lạc Sơn",
    parent_code: "17",
  },
  {
    value: "158",
    label: "Huyện Yên Thủy",
    parent_code: "17",
  },
  {
    value: "159",
    label: "Huyện Lạc Thủy",
    parent_code: "17",
  },
  {
    value: "164",
    label: "Thành phố Thái Nguyên",
    parent_code: "19",
  },
  {
    value: "165",
    label: "Thành phố Sông Công",
    parent_code: "19",
  },
  {
    value: "167",
    label: "Huyện Định Hóa",
    parent_code: "19",
  },
  {
    value: "168",
    label: "Huyện Phú Lương",
    parent_code: "19",
  },
  {
    value: "169",
    label: "Huyện Đồng Hỷ",
    parent_code: "19",
  },
  {
    value: "170",
    label: "Huyện Võ Nhai",
    parent_code: "19",
  },
  {
    value: "171",
    label: "Huyện Đại Từ",
    parent_code: "19",
  },
  {
    value: "172",
    label: "Thị xã Phổ Yên",
    parent_code: "19",
  },
  {
    value: "173",
    label: "Huyện Phú Bình",
    parent_code: "19",
  },
  {
    value: "178",
    label: "Thành phố Lạng Sơn",
    parent_code: "20",
  },
  {
    value: "180",
    label: "Huyện Tràng Định",
    parent_code: "20",
  },
  {
    value: "181",
    label: "Huyện Bình Gia",
    parent_code: "20",
  },
  {
    value: "182",
    label: "Huyện Văn Lãng",
    parent_code: "20",
  },
  {
    value: "183",
    label: "Huyện Cao Lộc",
    parent_code: "20",
  },
  {
    value: "184",
    label: "Huyện Văn Quan",
    parent_code: "20",
  },
  {
    value: "185",
    label: "Huyện Bắc Sơn",
    parent_code: "20",
  },
  {
    value: "186",
    label: "Huyện Hữu Lũng",
    parent_code: "20",
  },
  {
    value: "187",
    label: "Huyện Chi Lăng",
    parent_code: "20",
  },
  {
    value: "188",
    label: "Huyện Lộc Bình",
    parent_code: "20",
  },
  {
    value: "189",
    label: "Huyện Đình Lập",
    parent_code: "20",
  },
  {
    value: "193",
    label: "Thành phố Hạ Long",
    parent_code: "22",
  },
  {
    value: "194",
    label: "Thành phố Móng Cái",
    parent_code: "22",
  },
  {
    value: "195",
    label: "Thành phố Cẩm Phả",
    parent_code: "22",
  },
  {
    value: "196",
    label: "Thành phố Uông Bí",
    parent_code: "22",
  },
  {
    value: "198",
    label: "Huyện Bình Liêu",
    parent_code: "22",
  },
  {
    value: "199",
    label: "Huyện Tiên Yên",
    parent_code: "22",
  },
  {
    value: "200",
    label: "Huyện Đầm Hà",
    parent_code: "22",
  },
  {
    value: "201",
    label: "Huyện Hải Hà",
    parent_code: "22",
  },
  {
    value: "202",
    label: "Huyện Ba Chẽ",
    parent_code: "22",
  },
  {
    value: "203",
    label: "Huyện Vân Đồn",
    parent_code: "22",
  },
  {
    value: "205",
    label: "Thị xã Đông Triều",
    parent_code: "22",
  },
  {
    value: "206",
    label: "Thị xã Quảng Yên",
    parent_code: "22",
  },
  {
    value: "207",
    label: "Huyện Cô Tô",
    parent_code: "22",
  },
  {
    value: "213",
    label: "Thành phố Bắc Giang",
    parent_code: "24",
  },
  {
    value: "215",
    label: "Huyện Yên Thế",
    parent_code: "24",
  },
  {
    value: "216",
    label: "Huyện Tân Yên",
    parent_code: "24",
  },
  {
    value: "217",
    label: "Huyện Lạng Giang",
    parent_code: "24",
  },
  {
    value: "218",
    label: "Huyện Lục Nam",
    parent_code: "24",
  },
  {
    value: "219",
    label: "Huyện Lục Ngạn",
    parent_code: "24",
  },
  {
    value: "220",
    label: "Huyện Sơn Động",
    parent_code: "24",
  },
  {
    value: "221",
    label: "Huyện Yên Dũng",
    parent_code: "24",
  },
  {
    value: "222",
    label: "Huyện Việt Yên",
    parent_code: "24",
  },
  {
    value: "223",
    label: "Huyện Hiệp Hòa",
    parent_code: "24",
  },
  {
    value: "227",
    label: "Thành phố Việt Trì",
    parent_code: "25",
  },
  {
    value: "228",
    label: "Thị xã Phú Thọ",
    parent_code: "25",
  },
  {
    value: "230",
    label: "Huyện Đoan Hùng",
    parent_code: "25",
  },
  {
    value: "231",
    label: "Huyện Hạ Hoà",
    parent_code: "25",
  },
  {
    value: "232",
    label: "Huyện Thanh Ba",
    parent_code: "25",
  },
  {
    value: "233",
    label: "Huyện Phù Ninh",
    parent_code: "25",
  },
  {
    value: "234",
    label: "Huyện Yên Lập",
    parent_code: "25",
  },
  {
    value: "235",
    label: "Huyện Cẩm Khê",
    parent_code: "25",
  },
  {
    value: "236",
    label: "Huyện Tam Nông",
    parent_code: "25",
  },
  {
    value: "237",
    label: "Huyện Lâm Thao",
    parent_code: "25",
  },
  {
    value: "238",
    label: "Huyện Thanh Sơn",
    parent_code: "25",
  },
  {
    value: "239",
    label: "Huyện Thanh Thuỷ",
    parent_code: "25",
  },
  {
    value: "240",
    label: "Huyện Tân Sơn",
    parent_code: "25",
  },
  {
    value: "243",
    label: "Thành phố Vĩnh Yên",
    parent_code: "26",
  },
  {
    value: "244",
    label: "Thành phố Phúc Yên",
    parent_code: "26",
  },
  {
    value: "246",
    label: "Huyện Lập Thạch",
    parent_code: "26",
  },
  {
    value: "247",
    label: "Huyện Tam Dương",
    parent_code: "26",
  },
  {
    value: "248",
    label: "Huyện Tam Đảo",
    parent_code: "26",
  },
  {
    value: "249",
    label: "Huyện Bình Xuyên",
    parent_code: "26",
  },
  {
    value: "251",
    label: "Huyện Yên Lạc",
    parent_code: "26",
  },
  {
    value: "252",
    label: "Huyện Vĩnh Tường",
    parent_code: "26",
  },
  {
    value: "253",
    label: "Huyện Sông Lô",
    parent_code: "26",
  },
  {
    value: "256",
    label: "Thành phố Bắc Ninh",
    parent_code: "27",
  },
  {
    value: "258",
    label: "Huyện Yên Phong",
    parent_code: "27",
  },
  {
    value: "259",
    label: "Huyện Quế Võ",
    parent_code: "27",
  },
  {
    value: "260",
    label: "Huyện Tiên Du",
    parent_code: "27",
  },
  {
    value: "261",
    label: "Thị xã Từ Sơn",
    parent_code: "27",
  },
  {
    value: "262",
    label: "Huyện Thuận Thành",
    parent_code: "27",
  },
  {
    value: "263",
    label: "Huyện Gia Bình",
    parent_code: "27",
  },
  {
    value: "264",
    label: "Huyện Lương Tài",
    parent_code: "27",
  },
  {
    value: "288",
    label: "Thành phố Hải Dương",
    parent_code: "30",
  },
  {
    value: "290",
    label: "Thành phố Chí Linh",
    parent_code: "30",
  },
  {
    value: "291",
    label: "Huyện Nam Sách",
    parent_code: "30",
  },
  {
    value: "292",
    label: "Thị xã Kinh Môn",
    parent_code: "30",
  },
  {
    value: "293",
    label: "Huyện Kim Thành",
    parent_code: "30",
  },
  {
    value: "294",
    label: "Huyện Thanh Hà",
    parent_code: "30",
  },
  {
    value: "295",
    label: "Huyện Cẩm Giàng",
    parent_code: "30",
  },
  {
    value: "296",
    label: "Huyện Bình Giang",
    parent_code: "30",
  },
  {
    value: "297",
    label: "Huyện Gia Lộc",
    parent_code: "30",
  },
  {
    value: "298",
    label: "Huyện Tứ Kỳ",
    parent_code: "30",
  },
  {
    value: "299",
    label: "Huyện Ninh Giang",
    parent_code: "30",
  },
  {
    value: "300",
    label: "Huyện Thanh Miện",
    parent_code: "30",
  },
  {
    value: "303",
    label: "Quận Hồng Bàng",
    parent_code: "31",
  },
  {
    value: "304",
    label: "Quận Ngô Quyền",
    parent_code: "31",
  },
  {
    value: "305",
    label: "Quận Lê Chân",
    parent_code: "31",
  },
  {
    value: "306",
    label: "Quận Hải An",
    parent_code: "31",
  },
  {
    value: "307",
    label: "Quận Kiến An",
    parent_code: "31",
  },
  {
    value: "308",
    label: "Quận Đồ Sơn",
    parent_code: "31",
  },
  {
    value: "309",
    label: "Quận Dương Kinh",
    parent_code: "31",
  },
  {
    value: "311",
    label: "Huyện Thuỷ Nguyên",
    parent_code: "31",
  },
  {
    value: "312",
    label: "Huyện An Dương",
    parent_code: "31",
  },
  {
    value: "313",
    label: "Huyện An Lão",
    parent_code: "31",
  },
  {
    value: "314",
    label: "Huyện Kiến Thuỵ",
    parent_code: "31",
  },
  {
    value: "315",
    label: "Huyện Tiên Lãng",
    parent_code: "31",
  },
  {
    value: "316",
    label: "Huyện Vĩnh Bảo",
    parent_code: "31",
  },
  {
    value: "317",
    label: "Huyện Cát Hải",
    parent_code: "31",
  },
  {
    value: "318",
    label: "Huyện Bạch Long Vĩ",
    parent_code: "31",
  },
  {
    value: "323",
    label: "Thành phố Hưng Yên",
    parent_code: "33",
  },
  {
    value: "325",
    label: "Huyện Văn Lâm",
    parent_code: "33",
  },
  {
    value: "326",
    label: "Huyện Văn Giang",
    parent_code: "33",
  },
  {
    value: "327",
    label: "Huyện Yên Mỹ",
    parent_code: "33",
  },
  {
    value: "328",
    label: "Thị xã Mỹ Hào",
    parent_code: "33",
  },
  {
    value: "329",
    label: "Huyện Ân Thi",
    parent_code: "33",
  },
  {
    value: "330",
    label: "Huyện Khoái Châu",
    parent_code: "33",
  },
  {
    value: "331",
    label: "Huyện Kim Động",
    parent_code: "33",
  },
  {
    value: "332",
    label: "Huyện Tiên Lữ",
    parent_code: "33",
  },
  {
    value: "333",
    label: "Huyện Phù Cừ",
    parent_code: "33",
  },
  {
    value: "336",
    label: "Thành phố Thái Bình",
    parent_code: "34",
  },
  {
    value: "338",
    label: "Huyện Quỳnh Phụ",
    parent_code: "34",
  },
  {
    value: "339",
    label: "Huyện Hưng Hà",
    parent_code: "34",
  },
  {
    value: "340",
    label: "Huyện Đông Hưng",
    parent_code: "34",
  },
  {
    value: "341",
    label: "Huyện Thái Thụy",
    parent_code: "34",
  },
  {
    value: "342",
    label: "Huyện Tiền Hải",
    parent_code: "34",
  },
  {
    value: "343",
    label: "Huyện Kiến Xương",
    parent_code: "34",
  },
  {
    value: "344",
    label: "Huyện Vũ Thư",
    parent_code: "34",
  },
  {
    value: "347",
    label: "Thành phố Phủ Lý",
    parent_code: "35",
  },
  {
    value: "349",
    label: "Thị xã Duy Tiên",
    parent_code: "35",
  },
  {
    value: "350",
    label: "Huyện Kim Bảng",
    parent_code: "35",
  },
  {
    value: "351",
    label: "Huyện Thanh Liêm",
    parent_code: "35",
  },
  {
    value: "352",
    label: "Huyện Bình Lục",
    parent_code: "35",
  },
  {
    value: "353",
    label: "Huyện Lý Nhân",
    parent_code: "35",
  },
  {
    value: "356",
    label: "Thành phố Nam Định",
    parent_code: "36",
  },
  {
    value: "358",
    label: "Huyện Mỹ Lộc",
    parent_code: "36",
  },
  {
    value: "359",
    label: "Huyện Vụ Bản",
    parent_code: "36",
  },
  {
    value: "360",
    label: "Huyện Ý Yên",
    parent_code: "36",
  },
  {
    value: "361",
    label: "Huyện Nghĩa Hưng",
    parent_code: "36",
  },
  {
    value: "362",
    label: "Huyện Nam Trực",
    parent_code: "36",
  },
  {
    value: "363",
    label: "Huyện Trực Ninh",
    parent_code: "36",
  },
  {
    value: "364",
    label: "Huyện Xuân Trường",
    parent_code: "36",
  },
  {
    value: "365",
    label: "Huyện Giao Thủy",
    parent_code: "36",
  },
  {
    value: "366",
    label: "Huyện Hải Hậu",
    parent_code: "36",
  },
  {
    value: "369",
    label: "Thành phố Ninh Bình",
    parent_code: "37",
  },
  {
    value: "370",
    label: "Thành phố Tam Điệp",
    parent_code: "37",
  },
  {
    value: "372",
    label: "Huyện Nho Quan",
    parent_code: "37",
  },
  {
    value: "373",
    label: "Huyện Gia Viễn",
    parent_code: "37",
  },
  {
    value: "374",
    label: "Huyện Hoa Lư",
    parent_code: "37",
  },
  {
    value: "375",
    label: "Huyện Yên Khánh",
    parent_code: "37",
  },
  {
    value: "376",
    label: "Huyện Kim Sơn",
    parent_code: "37",
  },
  {
    value: "377",
    label: "Huyện Yên Mô",
    parent_code: "37",
  },
  {
    value: "380",
    label: "Thành phố Thanh Hóa",
    parent_code: "38",
  },
  {
    value: "381",
    label: "Thị xã Bỉm Sơn",
    parent_code: "38",
  },
  {
    value: "382",
    label: "Thành phố Sầm Sơn",
    parent_code: "38",
  },
  {
    value: "384",
    label: "Huyện Mường Lát",
    parent_code: "38",
  },
  {
    value: "385",
    label: "Huyện Quan Hóa",
    parent_code: "38",
  },
  {
    value: "386",
    label: "Huyện Bá Thước",
    parent_code: "38",
  },
  {
    value: "387",
    label: "Huyện Quan Sơn",
    parent_code: "38",
  },
  {
    value: "388",
    label: "Huyện Lang Chánh",
    parent_code: "38",
  },
  {
    value: "389",
    label: "Huyện Ngọc Lặc",
    parent_code: "38",
  },
  {
    value: "390",
    label: "Huyện Cẩm Thủy",
    parent_code: "38",
  },
  {
    value: "391",
    label: "Huyện Thạch Thành",
    parent_code: "38",
  },
  {
    value: "392",
    label: "Huyện Hà Trung",
    parent_code: "38",
  },
  {
    value: "393",
    label: "Huyện Vĩnh Lộc",
    parent_code: "38",
  },
  {
    value: "394",
    label: "Huyện Yên Định",
    parent_code: "38",
  },
  {
    value: "395",
    label: "Huyện Thọ Xuân",
    parent_code: "38",
  },
  {
    value: "396",
    label: "Huyện Thường Xuân",
    parent_code: "38",
  },
  {
    value: "397",
    label: "Huyện Triệu Sơn",
    parent_code: "38",
  },
  {
    value: "398",
    label: "Huyện Thiệu Hóa",
    parent_code: "38",
  },
  {
    value: "399",
    label: "Huyện Hoằng Hóa",
    parent_code: "38",
  },
  {
    value: "400",
    label: "Huyện Hậu Lộc",
    parent_code: "38",
  },
  {
    value: "401",
    label: "Huyện Nga Sơn",
    parent_code: "38",
  },
  {
    value: "402",
    label: "Huyện Như Xuân",
    parent_code: "38",
  },
  {
    value: "403",
    label: "Huyện Như Thanh",
    parent_code: "38",
  },
  {
    value: "404",
    label: "Huyện Nông Cống",
    parent_code: "38",
  },
  {
    value: "405",
    label: "Huyện Đông Sơn",
    parent_code: "38",
  },
  {
    value: "406",
    label: "Huyện Quảng Xương",
    parent_code: "38",
  },
  {
    value: "407",
    label: "Thị xã Nghi Sơn",
    parent_code: "38",
  },
  {
    value: "412",
    label: "Thành phố Vinh",
    parent_code: "40",
  },
  {
    value: "413",
    label: "Thị xã Cửa Lò",
    parent_code: "40",
  },
  {
    value: "414",
    label: "Thị xã Thái Hoà",
    parent_code: "40",
  },
  {
    value: "415",
    label: "Huyện Quế Phong",
    parent_code: "40",
  },
  {
    value: "416",
    label: "Huyện Quỳ Châu",
    parent_code: "40",
  },
  {
    value: "417",
    label: "Huyện Kỳ Sơn",
    parent_code: "40",
  },
  {
    value: "418",
    label: "Huyện Tương Dương",
    parent_code: "40",
  },
  {
    value: "419",
    label: "Huyện Nghĩa Đàn",
    parent_code: "40",
  },
  {
    value: "420",
    label: "Huyện Quỳ Hợp",
    parent_code: "40",
  },
  {
    value: "421",
    label: "Huyện Quỳnh Lưu",
    parent_code: "40",
  },
  {
    value: "422",
    label: "Huyện Con Cuông",
    parent_code: "40",
  },
  {
    value: "423",
    label: "Huyện Tân Kỳ",
    parent_code: "40",
  },
  {
    value: "424",
    label: "Huyện Anh Sơn",
    parent_code: "40",
  },
  {
    value: "425",
    label: "Huyện Diễn Châu",
    parent_code: "40",
  },
  {
    value: "426",
    label: "Huyện Yên Thành",
    parent_code: "40",
  },
  {
    value: "427",
    label: "Huyện Đô Lương",
    parent_code: "40",
  },
  {
    value: "428",
    label: "Huyện Thanh Chương",
    parent_code: "40",
  },
  {
    value: "429",
    label: "Huyện Nghi Lộc",
    parent_code: "40",
  },
  {
    value: "430",
    label: "Huyện Nam Đàn",
    parent_code: "40",
  },
  {
    value: "431",
    label: "Huyện Hưng Nguyên",
    parent_code: "40",
  },
  {
    value: "432",
    label: "Thị xã Hoàng Mai",
    parent_code: "40",
  },
  {
    value: "436",
    label: "Thành phố Hà Tĩnh",
    parent_code: "42",
  },
  {
    value: "437",
    label: "Thị xã Hồng Lĩnh",
    parent_code: "42",
  },
  {
    value: "439",
    label: "Huyện Hương Sơn",
    parent_code: "42",
  },
  {
    value: "440",
    label: "Huyện Đức Thọ",
    parent_code: "42",
  },
  {
    value: "441",
    label: "Huyện Vũ Quang",
    parent_code: "42",
  },
  {
    value: "442",
    label: "Huyện Nghi Xuân",
    parent_code: "42",
  },
  {
    value: "443",
    label: "Huyện Can Lộc",
    parent_code: "42",
  },
  {
    value: "444",
    label: "Huyện Hương Khê",
    parent_code: "42",
  },
  {
    value: "445",
    label: "Huyện Thạch Hà",
    parent_code: "42",
  },
  {
    value: "446",
    label: "Huyện Cẩm Xuyên",
    parent_code: "42",
  },
  {
    value: "447",
    label: "Huyện Kỳ Anh",
    parent_code: "42",
  },
  {
    value: "448",
    label: "Huyện Lộc Hà",
    parent_code: "42",
  },
  {
    value: "449",
    label: "Thị xã Kỳ Anh",
    parent_code: "42",
  },
  {
    value: "450",
    label: "Thành Phố Đồng Hới",
    parent_code: "44",
  },
  {
    value: "452",
    label: "Huyện Minh Hóa",
    parent_code: "44",
  },
  {
    value: "453",
    label: "Huyện Tuyên Hóa",
    parent_code: "44",
  },
  {
    value: "454",
    label: "Huyện Quảng Trạch",
    parent_code: "44",
  },
  {
    value: "455",
    label: "Huyện Bố Trạch",
    parent_code: "44",
  },
  {
    value: "456",
    label: "Huyện Quảng Ninh",
    parent_code: "44",
  },
  {
    value: "457",
    label: "Huyện Lệ Thủy",
    parent_code: "44",
  },
  {
    value: "458",
    label: "Thị xã Ba Đồn",
    parent_code: "44",
  },
  {
    value: "461",
    label: "Thành phố Đông Hà",
    parent_code: "45",
  },
  {
    value: "462",
    label: "Thị xã Quảng Trị",
    parent_code: "45",
  },
  {
    value: "464",
    label: "Huyện Vĩnh Linh",
    parent_code: "45",
  },
  {
    value: "465",
    label: "Huyện Hướng Hóa",
    parent_code: "45",
  },
  {
    value: "466",
    label: "Huyện Gio Linh",
    parent_code: "45",
  },
  {
    value: "467",
    label: "Huyện Đa Krông",
    parent_code: "45",
  },
  {
    value: "468",
    label: "Huyện Cam Lộ",
    parent_code: "45",
  },
  {
    value: "469",
    label: "Huyện Triệu Phong",
    parent_code: "45",
  },
  {
    value: "470",
    label: "Huyện Hải Lăng",
    parent_code: "45",
  },
  {
    value: "471",
    label: "Huyện Cồn Cỏ",
    parent_code: "45",
  },
  {
    value: "474",
    label: "Thành phố Huế",
    parent_code: "46",
  },
  {
    value: "476",
    label: "Huyện Phong Điền",
    parent_code: "46",
  },
  {
    value: "477",
    label: "Huyện Quảng Điền",
    parent_code: "46",
  },
  {
    value: "478",
    label: "Huyện Phú Vang",
    parent_code: "46",
  },
  {
    value: "479",
    label: "Thị xã Hương Thủy",
    parent_code: "46",
  },
  {
    value: "480",
    label: "Thị xã Hương Trà",
    parent_code: "46",
  },
  {
    value: "481",
    label: "Huyện A Lưới",
    parent_code: "46",
  },
  {
    value: "482",
    label: "Huyện Phú Lộc",
    parent_code: "46",
  },
  {
    value: "483",
    label: "Huyện Nam Đông",
    parent_code: "46",
  },
  {
    value: "490",
    label: "Quận Liên Chiểu",
    parent_code: "48",
  },
  {
    value: "491",
    label: "Quận Thanh Khê",
    parent_code: "48",
  },
  {
    value: "492",
    label: "Quận Hải Châu",
    parent_code: "48",
  },
  {
    value: "493",
    label: "Quận Sơn Trà",
    parent_code: "48",
  },
  {
    value: "494",
    label: "Quận Ngũ Hành Sơn",
    parent_code: "48",
  },
  {
    value: "495",
    label: "Quận Cẩm Lệ",
    parent_code: "48",
  },
  {
    value: "497",
    label: "Huyện Hòa Vang",
    parent_code: "48",
  },
  {
    value: "498",
    label: "Huyện Hoàng Sa",
    parent_code: "48",
  },
  {
    value: "502",
    label: "Thành phố Tam Kỳ",
    parent_code: "49",
  },
  {
    value: "503",
    label: "Thành phố Hội An",
    parent_code: "49",
  },
  {
    value: "504",
    label: "Huyện Tây Giang",
    parent_code: "49",
  },
  {
    value: "505",
    label: "Huyện Đông Giang",
    parent_code: "49",
  },
  {
    value: "506",
    label: "Huyện Đại Lộc",
    parent_code: "49",
  },
  {
    value: "507",
    label: "Thị xã Điện Bàn",
    parent_code: "49",
  },
  {
    value: "508",
    label: "Huyện Duy Xuyên",
    parent_code: "49",
  },
  {
    value: "509",
    label: "Huyện Quế Sơn",
    parent_code: "49",
  },
  {
    value: "510",
    label: "Huyện Nam Giang",
    parent_code: "49",
  },
  {
    value: "511",
    label: "Huyện Phước Sơn",
    parent_code: "49",
  },
  {
    value: "512",
    label: "Huyện Hiệp Đức",
    parent_code: "49",
  },
  {
    value: "513",
    label: "Huyện Thăng Bình",
    parent_code: "49",
  },
  {
    value: "514",
    label: "Huyện Tiên Phước",
    parent_code: "49",
  },
  {
    value: "515",
    label: "Huyện Bắc Trà My",
    parent_code: "49",
  },
  {
    value: "516",
    label: "Huyện Nam Trà My",
    parent_code: "49",
  },
  {
    value: "517",
    label: "Huyện Núi Thành",
    parent_code: "49",
  },
  {
    value: "518",
    label: "Huyện Phú Ninh",
    parent_code: "49",
  },
  {
    value: "519",
    label: "Huyện Nông Sơn",
    parent_code: "49",
  },
  {
    value: "522",
    label: "Thành phố Quảng Ngãi",
    parent_code: "51",
  },
  {
    value: "524",
    label: "Huyện Bình Sơn",
    parent_code: "51",
  },
  {
    value: "525",
    label: "Huyện Trà Bồng",
    parent_code: "51",
  },
  {
    value: "527",
    label: "Huyện Sơn Tịnh",
    parent_code: "51",
  },
  {
    value: "528",
    label: "Huyện Tư Nghĩa",
    parent_code: "51",
  },
  {
    value: "529",
    label: "Huyện Sơn Hà",
    parent_code: "51",
  },
  {
    value: "530",
    label: "Huyện Sơn Tây",
    parent_code: "51",
  },
  {
    value: "531",
    label: "Huyện Minh Long",
    parent_code: "51",
  },
  {
    value: "532",
    label: "Huyện Nghĩa Hành",
    parent_code: "51",
  },
  {
    value: "533",
    label: "Huyện Mộ Đức",
    parent_code: "51",
  },
  {
    value: "534",
    label: "Thị xã Đức Phổ",
    parent_code: "51",
  },
  {
    value: "535",
    label: "Huyện Ba Tơ",
    parent_code: "51",
  },
  {
    value: "536",
    label: "Huyện Lý Sơn",
    parent_code: "51",
  },
  {
    value: "540",
    label: "Thành phố Quy Nhơn",
    parent_code: "52",
  },
  {
    value: "542",
    label: "Huyện An Lão",
    parent_code: "52",
  },
  {
    value: "543",
    label: "Thị xã Hoài Nhơn",
    parent_code: "52",
  },
  {
    value: "544",
    label: "Huyện Hoài Ân",
    parent_code: "52",
  },
  {
    value: "545",
    label: "Huyện Phù Mỹ",
    parent_code: "52",
  },
  {
    value: "546",
    label: "Huyện Vĩnh Thạnh",
    parent_code: "52",
  },
  {
    value: "547",
    label: "Huyện Tây Sơn",
    parent_code: "52",
  },
  {
    value: "548",
    label: "Huyện Phù Cát",
    parent_code: "52",
  },
  {
    value: "549",
    label: "Thị xã An Nhơn",
    parent_code: "52",
  },
  {
    value: "550",
    label: "Huyện Tuy Phước",
    parent_code: "52",
  },
  {
    value: "551",
    label: "Huyện Vân Canh",
    parent_code: "52",
  },
  {
    value: "555",
    label: "Thành phố Tuy Hoà",
    parent_code: "54",
  },
  {
    value: "557",
    label: "Thị xã Sông Cầu",
    parent_code: "54",
  },
  {
    value: "558",
    label: "Huyện Đồng Xuân",
    parent_code: "54",
  },
  {
    value: "559",
    label: "Huyện Tuy An",
    parent_code: "54",
  },
  {
    value: "560",
    label: "Huyện Sơn Hòa",
    parent_code: "54",
  },
  {
    value: "561",
    label: "Huyện Sông Hinh",
    parent_code: "54",
  },
  {
    value: "562",
    label: "Huyện Tây Hoà",
    parent_code: "54",
  },
  {
    value: "563",
    label: "Huyện Phú Hoà",
    parent_code: "54",
  },
  {
    value: "564",
    label: "Thị xã Đông Hòa",
    parent_code: "54",
  },
  {
    value: "568",
    label: "Thành phố Nha Trang",
    parent_code: "56",
  },
  {
    value: "569",
    label: "Thành phố Cam Ranh",
    parent_code: "56",
  },
  {
    value: "570",
    label: "Huyện Cam Lâm",
    parent_code: "56",
  },
  {
    value: "571",
    label: "Huyện Vạn Ninh",
    parent_code: "56",
  },
  {
    value: "572",
    label: "Thị xã Ninh Hòa",
    parent_code: "56",
  },
  {
    value: "573",
    label: "Huyện Khánh Vĩnh",
    parent_code: "56",
  },
  {
    value: "574",
    label: "Huyện Diên Khánh",
    parent_code: "56",
  },
  {
    value: "575",
    label: "Huyện Khánh Sơn",
    parent_code: "56",
  },
  {
    value: "576",
    label: "Huyện Trường Sa",
    parent_code: "56",
  },
  {
    value: "582",
    label: "Thành phố Phan Rang-Tháp Chàm",
    parent_code: "58",
  },
  {
    value: "584",
    label: "Huyện Bác Ái",
    parent_code: "58",
  },
  {
    value: "585",
    label: "Huyện Ninh Sơn",
    parent_code: "58",
  },
  {
    value: "586",
    label: "Huyện Ninh Hải",
    parent_code: "58",
  },
  {
    value: "587",
    label: "Huyện Ninh Phước",
    parent_code: "58",
  },
  {
    value: "588",
    label: "Huyện Thuận Bắc",
    parent_code: "58",
  },
  {
    value: "589",
    label: "Huyện Thuận Nam",
    parent_code: "58",
  },
  {
    value: "593",
    label: "Thành phố Phan Thiết",
    parent_code: "60",
  },
  {
    value: "594",
    label: "Thị xã La Gi",
    parent_code: "60",
  },
  {
    value: "595",
    label: "Huyện Tuy Phong",
    parent_code: "60",
  },
  {
    value: "596",
    label: "Huyện Bắc Bình",
    parent_code: "60",
  },
  {
    value: "597",
    label: "Huyện Hàm Thuận Bắc",
    parent_code: "60",
  },
  {
    value: "598",
    label: "Huyện Hàm Thuận Nam",
    parent_code: "60",
  },
  {
    value: "599",
    label: "Huyện Tánh Linh",
    parent_code: "60",
  },
  {
    value: "600",
    label: "Huyện Đức Linh",
    parent_code: "60",
  },
  {
    value: "601",
    label: "Huyện Hàm Tân",
    parent_code: "60",
  },
  {
    value: "602",
    label: "Huyện Phú Quí",
    parent_code: "60",
  },
  {
    value: "608",
    label: "Thành phố Kon Tum",
    parent_code: "62",
  },
  {
    value: "610",
    label: "Huyện Đắk Glei",
    parent_code: "62",
  },
  {
    value: "611",
    label: "Huyện Ngọc Hồi",
    parent_code: "62",
  },
  {
    value: "612",
    label: "Huyện Đắk Tô",
    parent_code: "62",
  },
  {
    value: "613",
    label: "Huyện Kon Plông",
    parent_code: "62",
  },
  {
    value: "614",
    label: "Huyện Kon Rẫy",
    parent_code: "62",
  },
  {
    value: "615",
    label: "Huyện Đắk Hà",
    parent_code: "62",
  },
  {
    value: "616",
    label: "Huyện Sa Thầy",
    parent_code: "62",
  },
  {
    value: "617",
    label: "Huyện Tu Mơ Rông",
    parent_code: "62",
  },
  {
    value: "618",
    label: "Huyện Ia H' Drai",
    parent_code: "62",
  },
  {
    value: "622",
    label: "Thành phố Pleiku",
    parent_code: "64",
  },
  {
    value: "623",
    label: "Thị xã An Khê",
    parent_code: "64",
  },
  {
    value: "624",
    label: "Thị xã Ayun Pa",
    parent_code: "64",
  },
  {
    value: "625",
    label: "Huyện KBang",
    parent_code: "64",
  },
  {
    value: "626",
    label: "Huyện Đăk Đoa",
    parent_code: "64",
  },
  {
    value: "627",
    label: "Huyện Chư Păh",
    parent_code: "64",
  },
  {
    value: "628",
    label: "Huyện Ia Grai",
    parent_code: "64",
  },
  {
    value: "629",
    label: "Huyện Mang Yang",
    parent_code: "64",
  },
  {
    value: "630",
    label: "Huyện Kông Chro",
    parent_code: "64",
  },
  {
    value: "631",
    label: "Huyện Đức Cơ",
    parent_code: "64",
  },
  {
    value: "632",
    label: "Huyện Chư Prông",
    parent_code: "64",
  },
  {
    value: "633",
    label: "Huyện Chư Sê",
    parent_code: "64",
  },
  {
    value: "634",
    label: "Huyện Đăk Pơ",
    parent_code: "64",
  },
  {
    value: "635",
    label: "Huyện Ia Pa",
    parent_code: "64",
  },
  {
    value: "637",
    label: "Huyện Krông Pa",
    parent_code: "64",
  },
  {
    value: "638",
    label: "Huyện Phú Thiện",
    parent_code: "64",
  },
  {
    value: "639",
    label: "Huyện Chư Pưh",
    parent_code: "64",
  },
  {
    value: "643",
    label: "Thành phố Buôn Ma Thuột",
    parent_code: "66",
  },
  {
    value: "644",
    label: "Thị Xã Buôn Hồ",
    parent_code: "66",
  },
  {
    value: "645",
    label: "Huyện Ea H'leo",
    parent_code: "66",
  },
  {
    value: "646",
    label: "Huyện Ea Súp",
    parent_code: "66",
  },
  {
    value: "647",
    label: "Huyện Buôn Đôn",
    parent_code: "66",
  },
  {
    value: "648",
    label: "Huyện Cư M'gar",
    parent_code: "66",
  },
  {
    value: "649",
    label: "Huyện Krông Búk",
    parent_code: "66",
  },
  {
    value: "650",
    label: "Huyện Krông Năng",
    parent_code: "66",
  },
  {
    value: "651",
    label: "Huyện Ea Kar",
    parent_code: "66",
  },
  {
    value: "652",
    label: "Huyện M'Đrắk",
    parent_code: "66",
  },
  {
    value: "653",
    label: "Huyện Krông Bông",
    parent_code: "66",
  },
  {
    value: "654",
    label: "Huyện Krông Pắc",
    parent_code: "66",
  },
  {
    value: "655",
    label: "Huyện Krông A Na",
    parent_code: "66",
  },
  {
    value: "656",
    label: "Huyện Lắk",
    parent_code: "66",
  },
  {
    value: "657",
    label: "Huyện Cư Kuin",
    parent_code: "66",
  },
  {
    value: "660",
    label: "Thành phố Gia Nghĩa",
    parent_code: "67",
  },
  {
    value: "661",
    label: "Huyện Đăk Glong",
    parent_code: "67",
  },
  {
    value: "662",
    label: "Huyện Cư Jút",
    parent_code: "67",
  },
  {
    value: "663",
    label: "Huyện Đắk Mil",
    parent_code: "67",
  },
  {
    value: "664",
    label: "Huyện Krông Nô",
    parent_code: "67",
  },
  {
    value: "665",
    label: "Huyện Đắk Song",
    parent_code: "67",
  },
  {
    value: "666",
    label: "Huyện Đắk R'Lấp",
    parent_code: "67",
  },
  {
    value: "667",
    label: "Huyện Tuy Đức",
    parent_code: "67",
  },
  {
    value: "672",
    label: "Thành phố Đà Lạt",
    parent_code: "68",
  },
  {
    value: "673",
    label: "Thành phố Bảo Lộc",
    parent_code: "68",
  },
  {
    value: "674",
    label: "Huyện Đam Rông",
    parent_code: "68",
  },
  {
    value: "675",
    label: "Huyện Lạc Dương",
    parent_code: "68",
  },
  {
    value: "676",
    label: "Huyện Lâm Hà",
    parent_code: "68",
  },
  {
    value: "677",
    label: "Huyện Đơn Dương",
    parent_code: "68",
  },
  {
    value: "678",
    label: "Huyện Đức Trọng",
    parent_code: "68",
  },
  {
    value: "679",
    label: "Huyện Di Linh",
    parent_code: "68",
  },
  {
    value: "680",
    label: "Huyện Bảo Lâm",
    parent_code: "68",
  },
  {
    value: "681",
    label: "Huyện Đạ Huoai",
    parent_code: "68",
  },
  {
    value: "682",
    label: "Huyện Đạ Tẻh",
    parent_code: "68",
  },
  {
    value: "683",
    label: "Huyện Cát Tiên",
    parent_code: "68",
  },
  {
    value: "688",
    label: "Thị xã Phước Long",
    parent_code: "70",
  },
  {
    value: "689",
    label: "Thành phố Đồng Xoài",
    parent_code: "70",
  },
  {
    value: "690",
    label: "Thị xã Bình Long",
    parent_code: "70",
  },
  {
    value: "691",
    label: "Huyện Bù Gia Mập",
    parent_code: "70",
  },
  {
    value: "692",
    label: "Huyện Lộc Ninh",
    parent_code: "70",
  },
  {
    value: "693",
    label: "Huyện Bù Đốp",
    parent_code: "70",
  },
  {
    value: "694",
    label: "Huyện Hớn Quản",
    parent_code: "70",
  },
  {
    value: "695",
    label: "Huyện Đồng Phú",
    parent_code: "70",
  },
  {
    value: "696",
    label: "Huyện Bù Đăng",
    parent_code: "70",
  },
  {
    value: "697",
    label: "Huyện Chơn Thành",
    parent_code: "70",
  },
  {
    value: "698",
    label: "Huyện Phú Riềng",
    parent_code: "70",
  },
  {
    value: "703",
    label: "Thành phố Tây Ninh",
    parent_code: "72",
  },
  {
    value: "705",
    label: "Huyện Tân Biên",
    parent_code: "72",
  },
  {
    value: "706",
    label: "Huyện Tân Châu",
    parent_code: "72",
  },
  {
    value: "707",
    label: "Huyện Dương Minh Châu",
    parent_code: "72",
  },
  {
    value: "708",
    label: "Huyện Châu Thành",
    parent_code: "72",
  },
  {
    value: "709",
    label: "Thị xã Hòa Thành",
    parent_code: "72",
  },
  {
    value: "710",
    label: "Huyện Gò Dầu",
    parent_code: "72",
  },
  {
    value: "711",
    label: "Huyện Bến Cầu",
    parent_code: "72",
  },
  {
    value: "712",
    label: "Thị xã Trảng Bàng",
    parent_code: "72",
  },
  {
    value: "718",
    label: "Thành phố Thủ Dầu Một",
    parent_code: "74",
  },
  {
    value: "719",
    label: "Huyện Bàu Bàng",
    parent_code: "74",
  },
  {
    value: "720",
    label: "Huyện Dầu Tiếng",
    parent_code: "74",
  },
  {
    value: "721",
    label: "Thị xã Bến Cát",
    parent_code: "74",
  },
  {
    value: "722",
    label: "Huyện Phú Giáo",
    parent_code: "74",
  },
  {
    value: "723",
    label: "Thị xã Tân Uyên",
    parent_code: "74",
  },
  {
    value: "724",
    label: "Thành phố Dĩ An",
    parent_code: "74",
  },
  {
    value: "725",
    label: "Thành phố Thuận An",
    parent_code: "74",
  },
  {
    value: "726",
    label: "Huyện Bắc Tân Uyên",
    parent_code: "74",
  },
  {
    value: "731",
    label: "Thành phố Biên Hòa",
    parent_code: "75",
  },
  {
    value: "732",
    label: "Thành phố Long Khánh",
    parent_code: "75",
  },
  {
    value: "734",
    label: "Huyện Tân Phú",
    parent_code: "75",
  },
  {
    value: "735",
    label: "Huyện Vĩnh Cửu",
    parent_code: "75",
  },
  {
    value: "736",
    label: "Huyện Định Quán",
    parent_code: "75",
  },
  {
    value: "737",
    label: "Huyện Trảng Bom",
    parent_code: "75",
  },
  {
    value: "738",
    label: "Huyện Thống Nhất",
    parent_code: "75",
  },
  {
    value: "739",
    label: "Huyện Cẩm Mỹ",
    parent_code: "75",
  },
  {
    value: "740",
    label: "Huyện Long Thành",
    parent_code: "75",
  },
  {
    value: "741",
    label: "Huyện Xuân Lộc",
    parent_code: "75",
  },
  {
    value: "742",
    label: "Huyện Nhơn Trạch",
    parent_code: "75",
  },
  {
    value: "747",
    label: "Thành phố Vũng Tàu",
    parent_code: "77",
  },
  {
    value: "748",
    label: "Thành phố Bà Rịa",
    parent_code: "77",
  },
  {
    value: "750",
    label: "Huyện Châu Đức",
    parent_code: "77",
  },
  {
    value: "751",
    label: "Huyện Xuyên Mộc",
    parent_code: "77",
  },
  {
    value: "752",
    label: "Huyện Long Điền",
    parent_code: "77",
  },
  {
    value: "753",
    label: "Huyện Đất Đỏ",
    parent_code: "77",
  },
  {
    value: "754",
    label: "Thị xã Phú Mỹ",
    parent_code: "77",
  },
  {
    value: "755",
    label: "Huyện Côn Đảo",
    parent_code: "77",
  },
  {
    value: "760",
    label: "Quận 1",
    parent_code: "79",
  },
  {
    value: "761",
    label: "Quận 12",
    parent_code: "79",
  },
  {
    value: "764",
    label: "Quận Gò Vấp",
    parent_code: "79",
  },
  {
    value: "765",
    label: "Quận Bình Thạnh",
    parent_code: "79",
  },
  {
    value: "766",
    label: "Quận Tân Bình",
    parent_code: "79",
  },
  {
    value: "767",
    label: "Quận Tân Phú",
    parent_code: "79",
  },
  {
    value: "768",
    label: "Quận Phú Nhuận",
    parent_code: "79",
  },
  {
    value: "769",
    label: "Thành phố Thủ Đức",
    parent_code: "79",
  },
  {
    value: "770",
    label: "Quận 3",
    parent_code: "79",
  },
  {
    value: "771",
    label: "Quận 10",
    parent_code: "79",
  },
  {
    value: "772",
    label: "Quận 11",
    parent_code: "79",
  },
  {
    value: "773",
    label: "Quận 4",
    parent_code: "79",
  },
  {
    value: "774",
    label: "Quận 5",
    parent_code: "79",
  },
  {
    value: "775",
    label: "Quận 6",
    parent_code: "79",
  },
  {
    value: "776",
    label: "Quận 8",
    parent_code: "79",
  },
  {
    value: "777",
    label: "Quận Bình Tân",
    parent_code: "79",
  },
  {
    value: "778",
    label: "Quận 7",
    parent_code: "79",
  },
  {
    value: "783",
    label: "Huyện Củ Chi",
    parent_code: "79",
  },
  {
    value: "784",
    label: "Huyện Hóc Môn",
    parent_code: "79",
  },
  {
    value: "785",
    label: "Huyện Bình Chánh",
    parent_code: "79",
  },
  {
    value: "786",
    label: "Huyện Nhà Bè",
    parent_code: "79",
  },
  {
    value: "787",
    label: "Huyện Cần Giờ",
    parent_code: "79",
  },
  {
    value: "794",
    label: "Thành phố Tân An",
    parent_code: "80",
  },
  {
    value: "795",
    label: "Thị xã Kiến Tường",
    parent_code: "80",
  },
  {
    value: "796",
    label: "Huyện Tân Hưng",
    parent_code: "80",
  },
  {
    value: "797",
    label: "Huyện Vĩnh Hưng",
    parent_code: "80",
  },
  {
    value: "798",
    label: "Huyện Mộc Hóa",
    parent_code: "80",
  },
  {
    value: "799",
    label: "Huyện Tân Thạnh",
    parent_code: "80",
  },
  {
    value: "800",
    label: "Huyện Thạnh Hóa",
    parent_code: "80",
  },
  {
    value: "801",
    label: "Huyện Đức Huệ",
    parent_code: "80",
  },
  {
    value: "802",
    label: "Huyện Đức Hòa",
    parent_code: "80",
  },
  {
    value: "803",
    label: "Huyện Bến Lức",
    parent_code: "80",
  },
  {
    value: "804",
    label: "Huyện Thủ Thừa",
    parent_code: "80",
  },
  {
    value: "805",
    label: "Huyện Tân Trụ",
    parent_code: "80",
  },
  {
    value: "806",
    label: "Huyện Cần Đước",
    parent_code: "80",
  },
  {
    value: "807",
    label: "Huyện Cần Giuộc",
    parent_code: "80",
  },
  {
    value: "808",
    label: "Huyện Châu Thành",
    parent_code: "80",
  },
  {
    value: "815",
    label: "Thành phố Mỹ Tho",
    parent_code: "82",
  },
  {
    value: "816",
    label: "Thị xã Gò Công",
    parent_code: "82",
  },
  {
    value: "817",
    label: "Thị xã Cai Lậy",
    parent_code: "82",
  },
  {
    value: "818",
    label: "Huyện Tân Phước",
    parent_code: "82",
  },
  {
    value: "819",
    label: "Huyện Cái Bè",
    parent_code: "82",
  },
  {
    value: "820",
    label: "Huyện Cai Lậy",
    parent_code: "82",
  },
  {
    value: "821",
    label: "Huyện Châu Thành",
    parent_code: "82",
  },
  {
    value: "822",
    label: "Huyện Chợ Gạo",
    parent_code: "82",
  },
  {
    value: "823",
    label: "Huyện Gò Công Tây",
    parent_code: "82",
  },
  {
    value: "824",
    label: "Huyện Gò Công Đông",
    parent_code: "82",
  },
  {
    value: "825",
    label: "Huyện Tân Phú Đông",
    parent_code: "82",
  },
  {
    value: "829",
    label: "Thành phố Bến Tre",
    parent_code: "83",
  },
  {
    value: "831",
    label: "Huyện Châu Thành",
    parent_code: "83",
  },
  {
    value: "832",
    label: "Huyện Chợ Lách",
    parent_code: "83",
  },
  {
    value: "833",
    label: "Huyện Mỏ Cày Nam",
    parent_code: "83",
  },
  {
    value: "834",
    label: "Huyện Giồng Trôm",
    parent_code: "83",
  },
  {
    value: "835",
    label: "Huyện Bình Đại",
    parent_code: "83",
  },
  {
    value: "836",
    label: "Huyện Ba Tri",
    parent_code: "83",
  },
  {
    value: "837",
    label: "Huyện Thạnh Phú",
    parent_code: "83",
  },
  {
    value: "838",
    label: "Huyện Mỏ Cày Bắc",
    parent_code: "83",
  },
  {
    value: "842",
    label: "Thành phố Trà Vinh",
    parent_code: "84",
  },
  {
    value: "844",
    label: "Huyện Càng Long",
    parent_code: "84",
  },
  {
    value: "845",
    label: "Huyện Cầu Kè",
    parent_code: "84",
  },
  {
    value: "846",
    label: "Huyện Tiểu Cần",
    parent_code: "84",
  },
  {
    value: "847",
    label: "Huyện Châu Thành",
    parent_code: "84",
  },
  {
    value: "848",
    label: "Huyện Cầu Ngang",
    parent_code: "84",
  },
  {
    value: "849",
    label: "Huyện Trà Cú",
    parent_code: "84",
  },
  {
    value: "850",
    label: "Huyện Duyên Hải",
    parent_code: "84",
  },
  {
    value: "851",
    label: "Thị xã Duyên Hải",
    parent_code: "84",
  },
  {
    value: "855",
    label: "Thành phố Vĩnh Long",
    parent_code: "86",
  },
  {
    value: "857",
    label: "Huyện Long Hồ",
    parent_code: "86",
  },
  {
    value: "858",
    label: "Huyện Mang Thít",
    parent_code: "86",
  },
  {
    value: "859",
    label: "Huyện  Vũng Liêm",
    parent_code: "86",
  },
  {
    value: "860",
    label: "Huyện Tam Bình",
    parent_code: "86",
  },
  {
    value: "861",
    label: "Thị xã Bình Minh",
    parent_code: "86",
  },
  {
    value: "862",
    label: "Huyện Trà Ôn",
    parent_code: "86",
  },
  {
    value: "863",
    label: "Huyện Bình Tân",
    parent_code: "86",
  },
  {
    value: "866",
    label: "Thành phố Cao Lãnh",
    parent_code: "87",
  },
  {
    value: "867",
    label: "Thành phố Sa Đéc",
    parent_code: "87",
  },
  {
    value: "868",
    label: "Thành phố Hồng Ngự",
    parent_code: "87",
  },
  {
    value: "869",
    label: "Huyện Tân Hồng",
    parent_code: "87",
  },
  {
    value: "870",
    label: "Huyện Hồng Ngự",
    parent_code: "87",
  },
  {
    value: "871",
    label: "Huyện Tam Nông",
    parent_code: "87",
  },
  {
    value: "872",
    label: "Huyện Tháp Mười",
    parent_code: "87",
  },
  {
    value: "873",
    label: "Huyện Cao Lãnh",
    parent_code: "87",
  },
  {
    value: "874",
    label: "Huyện Thanh Bình",
    parent_code: "87",
  },
  {
    value: "875",
    label: "Huyện Lấp Vò",
    parent_code: "87",
  },
  {
    value: "876",
    label: "Huyện Lai Vung",
    parent_code: "87",
  },
  {
    value: "877",
    label: "Huyện Châu Thành",
    parent_code: "87",
  },
  {
    value: "883",
    label: "Thành phố Long Xuyên",
    parent_code: "89",
  },
  {
    value: "884",
    label: "Thành phố Châu Đốc",
    parent_code: "89",
  },
  {
    value: "886",
    label: "Huyện An Phú",
    parent_code: "89",
  },
  {
    value: "887",
    label: "Thị xã Tân Châu",
    parent_code: "89",
  },
  {
    value: "888",
    label: "Huyện Phú Tân",
    parent_code: "89",
  },
  {
    value: "889",
    label: "Huyện Châu Phú",
    parent_code: "89",
  },
  {
    value: "890",
    label: "Huyện Tịnh Biên",
    parent_code: "89",
  },
  {
    value: "891",
    label: "Huyện Tri Tôn",
    parent_code: "89",
  },
  {
    value: "892",
    label: "Huyện Châu Thành",
    parent_code: "89",
  },
  {
    value: "893",
    label: "Huyện Chợ Mới",
    parent_code: "89",
  },
  {
    value: "894",
    label: "Huyện Thoại Sơn",
    parent_code: "89",
  },
  {
    value: "899",
    label: "Thành phố Rạch Giá",
    parent_code: "91",
  },
  {
    value: "900",
    label: "Thành phố Hà Tiên",
    parent_code: "91",
  },
  {
    value: "902",
    label: "Huyện Kiên Lương",
    parent_code: "91",
  },
  {
    value: "903",
    label: "Huyện Hòn Đất",
    parent_code: "91",
  },
  {
    value: "904",
    label: "Huyện Tân Hiệp",
    parent_code: "91",
  },
  {
    value: "905",
    label: "Huyện Châu Thành",
    parent_code: "91",
  },
  {
    value: "906",
    label: "Huyện Giồng Riềng",
    parent_code: "91",
  },
  {
    value: "907",
    label: "Huyện Gò Quao",
    parent_code: "91",
  },
  {
    value: "908",
    label: "Huyện An Biên",
    parent_code: "91",
  },
  {
    value: "909",
    label: "Huyện An Minh",
    parent_code: "91",
  },
  {
    value: "910",
    label: "Huyện Vĩnh Thuận",
    parent_code: "91",
  },
  {
    value: "911",
    label: "Thành phố Phú Quốc",
    parent_code: "91",
  },
  {
    value: "912",
    label: "Huyện Kiên Hải",
    parent_code: "91",
  },
  {
    value: "913",
    label: "Huyện U Minh Thượng",
    parent_code: "91",
  },
  {
    value: "914",
    label: "Huyện Giang Thành",
    parent_code: "91",
  },
  {
    value: "916",
    label: "Quận Ninh Kiều",
    parent_code: "92",
  },
  {
    value: "917",
    label: "Quận Ô Môn",
    parent_code: "92",
  },
  {
    value: "918",
    label: "Quận Bình Thuỷ",
    parent_code: "92",
  },
  {
    value: "919",
    label: "Quận Cái Răng",
    parent_code: "92",
  },
  {
    value: "923",
    label: "Quận Thốt Nốt",
    parent_code: "92",
  },
  {
    value: "924",
    label: "Huyện Vĩnh Thạnh",
    parent_code: "92",
  },
  {
    value: "925",
    label: "Huyện Cờ Đỏ",
    parent_code: "92",
  },
  {
    value: "926",
    label: "Huyện Phong Điền",
    parent_code: "92",
  },
  {
    value: "927",
    label: "Huyện Thới Lai",
    parent_code: "92",
  },
  {
    value: "930",
    label: "Thành phố Vị Thanh",
    parent_code: "93",
  },
  {
    value: "931",
    label: "Thành phố Ngã Bảy",
    parent_code: "93",
  },
  {
    value: "932",
    label: "Huyện Châu Thành A",
    parent_code: "93",
  },
  {
    value: "933",
    label: "Huyện Châu Thành",
    parent_code: "93",
  },
  {
    value: "934",
    label: "Huyện Phụng Hiệp",
    parent_code: "93",
  },
  {
    value: "935",
    label: "Huyện Vị Thuỷ",
    parent_code: "93",
  },
  {
    value: "936",
    label: "Huyện Long Mỹ",
    parent_code: "93",
  },
  {
    value: "937",
    label: "Thị xã Long Mỹ",
    parent_code: "93",
  },
  {
    value: "941",
    label: "Thành phố Sóc Trăng",
    parent_code: "94",
  },
  {
    value: "942",
    label: "Huyện Châu Thành",
    parent_code: "94",
  },
  {
    value: "943",
    label: "Huyện Kế Sách",
    parent_code: "94",
  },
  {
    value: "944",
    label: "Huyện Mỹ Tú",
    parent_code: "94",
  },
  {
    value: "945",
    label: "Huyện Cù Lao Dung",
    parent_code: "94",
  },
  {
    value: "946",
    label: "Huyện Long Phú",
    parent_code: "94",
  },
  {
    value: "947",
    label: "Huyện Mỹ Xuyên",
    parent_code: "94",
  },
  {
    value: "948",
    label: "Thị xã Ngã Năm",
    parent_code: "94",
  },
  {
    value: "949",
    label: "Huyện Thạnh Trị",
    parent_code: "94",
  },
  {
    value: "950",
    label: "Thị xã Vĩnh Châu",
    parent_code: "94",
  },
  {
    value: "951",
    label: "Huyện Trần Đề",
    parent_code: "94",
  },
  {
    value: "954",
    label: "Thành phố Bạc Liêu",
    parent_code: "95",
  },
  {
    value: "956",
    label: "Huyện Hồng Dân",
    parent_code: "95",
  },
  {
    value: "957",
    label: "Huyện Phước Long",
    parent_code: "95",
  },
  {
    value: "958",
    label: "Huyện Vĩnh Lợi",
    parent_code: "95",
  },
  {
    value: "959",
    label: "Thị xã Giá Rai",
    parent_code: "95",
  },
  {
    value: "960",
    label: "Huyện Đông Hải",
    parent_code: "95",
  },
  {
    value: "961",
    label: "Huyện Hoà Bình",
    parent_code: "95",
  },
  {
    value: "964",
    label: "Thành phố Cà Mau",
    parent_code: "96",
  },
  {
    value: "966",
    label: "Huyện U Minh",
    parent_code: "96",
  },
  {
    value: "967",
    label: "Huyện Thới Bình",
    parent_code: "96",
  },
  {
    value: "968",
    label: "Huyện Trần Văn Thời",
    parent_code: "96",
  },
  {
    value: "969",
    label: "Huyện Cái Nước",
    parent_code: "96",
  },
  {
    value: "970",
    label: "Huyện Đầm Dơi",
    parent_code: "96",
  },
  {
    value: "971",
    label: "Huyện Năm Căn",
    parent_code: "96",
  },
  {
    value: "972",
    label: "Huyện Phú Tân",
    parent_code: "96",
  },
  {
    value: "973",
    label: "Huyện Ngọc Hiển",
    parent_code: "96",
  },
];

export default districts;
