import type { EslMode, Lang, Level, Location } from '../types';

export const LANGUAGES: { code: Lang; label: string }[] = [
  { code: 'zh', label: '中文' },
  { code: 'ko', label: '한국어' },
  { code: 'ja', label: '日本語' },
  { code: 'es', label: 'Español' },
  { code: 'vi', label: 'Tiếng Việt' },
  { code: 'th', label: 'ไทย' },
  { code: 'pt', label: 'Português' },
  { code: 'fr', label: 'Français' },
];

const LEVEL_ORDER: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1'];

export const LOCATIONS: Location[] = [
  // A1
  { en: 'Beach', level: 'A1', translations: { zh: '海滩', ko: '해변', ja: 'ビーチ', es: 'Playa', vi: 'Bãi biển', th: 'ชายหาด', pt: 'Praia', fr: 'Plage' } },
  { en: 'Supermarket', level: 'A1', translations: { zh: '超市', ko: '슈퍼마켓', ja: 'スーパーマーケット', es: 'Supermercado', vi: 'Siêu thị', th: 'ซูเปอร์มาร์เก็ต', pt: 'Supermercado', fr: 'Supermarché' } },
  { en: 'School', level: 'A1', translations: { zh: '学校', ko: '학교', ja: '学校', es: 'Escuela', vi: 'Trường học', th: 'โรงเรียน', pt: 'Escola', fr: 'École' } },
  { en: 'Park', level: 'A1', translations: { zh: '公园', ko: '공원', ja: '公園', es: 'Parque', vi: 'Công viên', th: 'สวนสาธารณะ', pt: 'Parque', fr: 'Parc' } },
  { en: 'Hospital', level: 'A1', translations: { zh: '医院', ko: '병원', ja: '病院', es: 'Hospital', vi: 'Bệnh viện', th: 'โรงพยาบาล', pt: 'Hospital', fr: 'Hôpital' } },
  { en: 'Bank', level: 'A1', translations: { zh: '银行', ko: '은행', ja: '銀行', es: 'Banco', vi: 'Ngân hàng', th: 'ธนาคาร', pt: 'Banco', fr: 'Banque' } },
  { en: 'Restaurant', level: 'A1', translations: { zh: '餐厅', ko: '식당', ja: 'レストラン', es: 'Restaurante', vi: 'Nhà hàng', th: 'ร้านอาหาร', pt: 'Restaurante', fr: 'Restaurant' } },
  { en: 'Café', level: 'A1', translations: { zh: '咖啡馆', ko: '카페', ja: 'カフェ', es: 'Cafetería', vi: 'Quán cà phê', th: 'ร้านกาแฟ', pt: 'Café', fr: 'Café' } },
  { en: 'Library', level: 'A1', translations: { zh: '图书馆', ko: '도서관', ja: '図書館', es: 'Biblioteca', vi: 'Thư viện', th: 'ห้องสมุด', pt: 'Biblioteca', fr: 'Bibliothèque' } },
  { en: 'Airport', level: 'A1', translations: { zh: '机场', ko: '공항', ja: '空港', es: 'Aeropuerto', vi: 'Sân bay', th: 'สนามบิน', pt: 'Aeroporto', fr: 'Aéroport' } },
  { en: 'Train station', level: 'A1', translations: { zh: '火车站', ko: '기차역', ja: '駅', es: 'Estación de tren', vi: 'Ga tàu', th: 'สถานีรถไฟ', pt: 'Estação de trem', fr: 'Gare' } },
  { en: 'Hotel', level: 'A1', translations: { zh: '酒店', ko: '호텔', ja: 'ホテル', es: 'Hotel', vi: 'Khách sạn', th: 'โรงแรม', pt: 'Hotel', fr: 'Hôtel' } },
  { en: 'Cinema', level: 'A1', translations: { zh: '电影院', ko: '영화관', ja: '映画館', es: 'Cine', vi: 'Rạp chiếu phim', th: 'โรงภาพยนตร์', pt: 'Cinema', fr: 'Cinéma' } },
  { en: 'Shopping centre', level: 'A1', translations: { zh: '购物中心', ko: '쇼핑센터', ja: 'ショッピングセンター', es: 'Centro comercial', vi: 'Trung tâm mua sắm', th: 'ศูนย์การค้า', pt: 'Shopping', fr: 'Centre commercial' } },
  { en: 'Post office', level: 'A1', translations: { zh: '邮局', ko: '우체국', ja: '郵便局', es: 'Oficina de correos', vi: 'Bưu điện', th: 'ที่ทำการไปรษณีย์', pt: 'Correios', fr: 'Bureau de poste' } },
  { en: 'Pharmacy', level: 'A1', translations: { zh: '药店', ko: '약국', ja: '薬局', es: 'Farmacia', vi: 'Hiệu thuốc', th: 'ร้านขายยา', pt: 'Farmácia', fr: 'Pharmacie' } },
  { en: 'Museum', level: 'A1', translations: { zh: '博物馆', ko: '박물관', ja: '博物館', es: 'Museo', vi: 'Bảo tàng', th: 'พิพิธภัณฑ์', pt: 'Museu', fr: 'Musée' } },
  { en: 'Zoo', level: 'A1', translations: { zh: '动物园', ko: '동물원', ja: '動物園', es: 'Zoológico', vi: 'Sở thú', th: 'สวนสัตว์', pt: 'Zoológico', fr: 'Zoo' } },
  { en: 'Swimming pool', level: 'A1', translations: { zh: '游泳池', ko: '수영장', ja: 'プール', es: 'Piscina', vi: 'Hồ bơi', th: 'สระว่ายน้ำ', pt: 'Piscina', fr: 'Piscine' } },
  { en: 'Gym', level: 'A1', translations: { zh: '健身房', ko: '헬스장', ja: 'ジム', es: 'Gimnasio', vi: 'Phòng tập gym', th: 'ฟิตเนส', pt: 'Academia', fr: 'Salle de sport' } },
  { en: 'Playground', level: 'A1', translations: { zh: '游乐场', ko: '놀이터', ja: '遊び場', es: 'Parque infantil', vi: 'Sân chơi', th: 'สนามเด็กเล่น', pt: 'Parquinho', fr: 'Aire de jeux' } },
  { en: 'Office', level: 'A1', translations: { zh: '办公室', ko: '사무실', ja: 'オフィス', es: 'Oficina', vi: 'Văn phòng', th: 'สำนักงาน', pt: 'Escritório', fr: 'Bureau' } },
  { en: 'Police station', level: 'A1', translations: { zh: '警察局', ko: '경찰서', ja: '警察署', es: 'Comisaría', vi: 'Đồn cảnh sát', th: 'สถานีตำรวจ', pt: 'Delegacia', fr: 'Commissariat' } },
  { en: 'Fire station', level: 'A1', translations: { zh: '消防局', ko: '소방서', ja: '消防署', es: 'Estación de bomberos', vi: 'Trạm cứu hỏa', th: 'สถานีดับเพลิง', pt: 'Quartel dos bombeiros', fr: 'Caserne de pompiers' } },
  { en: 'Market', level: 'A1', translations: { zh: '市场', ko: '시장', ja: '市場', es: 'Mercado', vi: 'Chợ', th: 'ตลาด', pt: 'Mercado', fr: 'Marché' } },
  { en: 'Farm', level: 'A1', translations: { zh: '农场', ko: '농장', ja: '農場', es: 'Granja', vi: 'Nông trại', th: 'ฟาร์ม', pt: 'Fazenda', fr: 'Ferme' } },
  { en: 'Church', level: 'A1', translations: { zh: '教堂', ko: '교회', ja: '教会', es: 'Iglesia', vi: 'Nhà thờ', th: 'โบสถ์', pt: 'Igreja', fr: 'Église' } },
  // A2
  { en: 'Bakery', level: 'A2', translations: { zh: '面包店', ko: '빵집', ja: 'パン屋', es: 'Panadería', vi: 'Tiệm bánh', th: 'ร้านเบเกอรี่', pt: 'Padaria', fr: 'Boulangerie' } },
  { en: 'Bookshop', level: 'A2', translations: { zh: '书店', ko: '서점', ja: '書店', es: 'Librería', vi: 'Hiệu sách', th: 'ร้านหนังสือ', pt: 'Livraria', fr: 'Librairie' } },
  { en: 'Petrol station', level: 'A2', translations: { zh: '加油站', ko: '주유소', ja: 'ガソリンスタンド', es: 'Gasolinera', vi: 'Trạm xăng', th: 'ปั๊มน้ำมัน', pt: 'Posto de gasolina', fr: 'Station-service' } },
  { en: "Dentist's office", level: 'A2', translations: { zh: '牙科诊所', ko: '치과', ja: '歯科医院', es: 'Consultorio dental', vi: 'Phòng khám nha khoa', th: 'คลินิกทันตกรรม', pt: 'Consultório odontológico', fr: 'Cabinet dentaire' } },
  { en: "Hairdresser's", level: 'A2', translations: { zh: '理发店', ko: '미용실', ja: '美容院', es: 'Peluquería', vi: 'Tiệm làm tóc', th: 'ร้านทำผม', pt: 'Cabeleireiro', fr: 'Salon de coiffure' } },
  { en: 'University', level: 'A2', translations: { zh: '大学', ko: '대학교', ja: '大学', es: 'Universidad', vi: 'Trường đại học', th: 'มหาวิทยาลัย', pt: 'Universidade', fr: 'Université' } },
  { en: 'Sports centre', level: 'A2', translations: { zh: '体育中心', ko: '스포츠 센터', ja: 'スポーツセンター', es: 'Centro deportivo', vi: 'Trung tâm thể thao', th: 'ศูนย์กีฬา', pt: 'Centro esportivo', fr: 'Centre sportif' } },
  { en: 'Department store', level: 'A2', translations: { zh: '百货商店', ko: '백화점', ja: 'デパート', es: 'Grandes almacenes', vi: 'Cửa hàng bách hóa', th: 'ห้างสรรพสินค้า', pt: 'Loja de departamentos', fr: 'Grand magasin' } },
  { en: 'Car park', level: 'A2', translations: { zh: '停车场', ko: '주차장', ja: '駐車場', es: 'Aparcamiento', vi: 'Bãi đỗ xe', th: 'ที่จอดรถ', pt: 'Estacionamento', fr: 'Parking' } },
  // B1
  { en: 'Courthouse', level: 'B1', translations: { zh: '法院', ko: '법원', ja: '裁判所', es: 'Juzgado', vi: 'Tòa án', th: 'ศาล', pt: 'Tribunal', fr: 'Palais de justice' } },
  { en: 'Town hall', level: 'B1', translations: { zh: '市政厅', ko: '시청', ja: '市役所', es: 'Ayuntamiento', vi: 'Tòa thị chính', th: 'ศาลากลาง', pt: 'Prefeitura', fr: 'Mairie' } },
  { en: 'Art gallery', level: 'B1', translations: { zh: '美术馆', ko: '미술관', ja: '美術館', es: 'Galería de arte', vi: 'Phòng trưng bày nghệ thuật', th: 'หอศิลป์', pt: 'Galeria de arte', fr: "Galerie d'art" } },
  { en: 'Campsite', level: 'B1', translations: { zh: '露营地', ko: '캠핑장', ja: 'キャンプ場', es: 'Camping', vi: 'Khu cắm trại', th: 'ที่ตั้งแคมป์', pt: 'Acampamento', fr: 'Camping' } },
  { en: 'Harbour', level: 'B1', translations: { zh: '港口', ko: '항구', ja: '港', es: 'Puerto', vi: 'Bến cảng', th: 'ท่าเรือ', pt: 'Porto', fr: 'Port' } },
  { en: 'Conference centre', level: 'B1', translations: { zh: '会议中心', ko: '컨퍼런스 센터', ja: '会議場', es: 'Centro de conferencias', vi: 'Trung tâm hội nghị', th: 'ศูนย์การประชุม', pt: 'Centro de convenções', fr: 'Centre de conférences' } },
  { en: 'Youth hostel', level: 'B1', translations: { zh: '青年旅舍', ko: '유스호스텔', ja: 'ユースホステル', es: 'Albergue juvenil', vi: 'Nhà nghỉ thanh niên', th: 'ที่พักเยาวชน', pt: 'Albergue da juventude', fr: 'Auberge de jeunesse' } },
  { en: 'Embassy', level: 'B1', translations: { zh: '大使馆', ko: '대사관', ja: '大使館', es: 'Embajada', vi: 'Đại sứ quán', th: 'สถานทูต', pt: 'Embaixada', fr: 'Ambassade' } },
  { en: 'Nature reserve', level: 'B1', translations: { zh: '自然保护区', ko: '자연 보호 구역', ja: '自然保護区', es: 'Reserva natural', vi: 'Khu bảo tồn thiên nhiên', th: 'เขตอนุรักษ์ธรรมชาติ', pt: 'Reserva natural', fr: 'Réserve naturelle' } },
  { en: 'Prison', level: 'B1', translations: { zh: '监狱', ko: '교도소', ja: '刑務所', es: 'Prisión', vi: 'Nhà tù', th: 'เรือนจำ', pt: 'Prisão', fr: 'Prison' } },
  { en: 'Factory', level: 'B1', translations: { zh: '工厂', ko: '공장', ja: '工場', es: 'Fábrica', vi: 'Nhà máy', th: 'โรงงาน', pt: 'Fábrica', fr: 'Usine' } },
  // B2
  { en: 'Observatory', level: 'B2', translations: { zh: '天文台', ko: '천문대', ja: '天文台', es: 'Observatorio', vi: 'Đài thiên văn', th: 'หอดูดาว', pt: 'Observatório', fr: 'Observatoire' } },
  { en: 'Research laboratory', level: 'B2', translations: { zh: '研究实验室', ko: '연구소', ja: '研究所', es: 'Laboratorio de investigación', vi: 'Phòng thí nghiệm nghiên cứu', th: 'ห้องปฏิบัติการวิจัย', pt: 'Laboratório de pesquisa', fr: 'Laboratoire de recherche' } },
  { en: 'Retirement home', level: 'B2', translations: { zh: '养老院', ko: '요양원', ja: '老人ホーム', es: 'Residencia de ancianos', vi: 'Viện dưỡng lão', th: 'บ้านพักคนชรา', pt: 'Lar de idosos', fr: 'Maison de retraite' } },
  { en: 'Construction site', level: 'B2', translations: { zh: '建筑工地', ko: '공사장', ja: '建設現場', es: 'Obra de construcción', vi: 'Công trường xây dựng', th: 'ไซต์ก่อสร้าง', pt: 'Canteiro de obras', fr: 'Chantier de construction' } },
  { en: 'Military base', level: 'B2', translations: { zh: '军事基地', ko: '군사 기지', ja: '軍事基地', es: 'Base militar', vi: 'Căn cứ quân sự', th: 'ฐานทัพ', pt: 'Base militar', fr: 'Base militaire' } },
  { en: 'Film studio', level: 'B2', translations: { zh: '电影制片厂', ko: '영화 스튜디오', ja: '映画スタジオ', es: 'Estudio de cine', vi: 'Trường quay phim', th: 'สตูดิโอภาพยนตร์', pt: 'Estúdio de cinema', fr: 'Studio de cinéma' } },
  { en: 'Refugee camp', level: 'B2', translations: { zh: '难民营', ko: '난민 수용소', ja: '難民キャンプ', es: 'Campo de refugiados', vi: 'Trại tị nạn', th: 'ค่ายผู้ลี้ภัย', pt: 'Campo de refugiados', fr: 'Camp de réfugiés' } },
  { en: 'World Cup Final', level: 'B2', translations: { zh: '世界杯决赛', ko: '월드컵 결승전', ja: 'ワールドカップ決勝', es: 'Final de la Copa del Mundo', vi: 'Chung kết World Cup', th: 'นัดชิงชนะเลิศฟุตบอลโลก', pt: 'Final da Copa do Mundo', fr: 'Finale de la Coupe du Monde' } },
  // C1
  { en: 'Archaeological site', level: 'C1', translations: { zh: '考古遗址', ko: '고고학 유적지', ja: '遺跡', es: 'Yacimiento arqueológico', vi: 'Di chỉ khảo cổ', th: 'แหล่งโบราณคดี', pt: 'Sítio arqueológico', fr: 'Site archéologique' } },
  { en: 'War zone', level: 'C1', translations: { zh: '战区', ko: '전쟁 지역', ja: '戦闘地域', es: 'Zona de guerra', vi: 'Vùng chiến sự', th: 'เขตสงคราม', pt: 'Zona de guerra', fr: 'Zone de guerre' } },
  { en: 'Nuclear power plant', level: 'C1', translations: { zh: '核电站', ko: '원자력 발전소', ja: '原子力発電所', es: 'Central nuclear', vi: 'Nhà máy điện hạt nhân', th: 'โรงไฟฟ้านิวเคลียร์', pt: 'Usina nuclear', fr: 'Centrale nucléaire' } },
  { en: 'Data centre', level: 'C1', translations: { zh: '数据中心', ko: '데이터 센터', ja: 'データセンター', es: 'Centro de datos', vi: 'Trung tâm dữ liệu', th: 'ศูนย์ข้อมูล', pt: 'Data center', fr: 'Centre de données' } },
  { en: 'Offshore drilling platform', level: 'C1', translations: { zh: '海上钻井平台', ko: '해양 시추 플랫폼', ja: '海洋掘削プラットフォーム', es: 'Plataforma petrolífera', vi: 'Giàn khoan ngoài khơi', th: 'แท่นขุดเจาะน้ำมันนอกชายฝั่ง', pt: 'Plataforma de perfuração offshore', fr: 'Plateforme de forage offshore' } },
];

/**
 * Returns the pool of locations available for the given ESL mode.
 * Each level is cumulative: B1 includes A1, A2 and B1. ESL off ('No')
 * uses the full pool, identical to C1.
 */
export function getLocationPool(eslMode: EslMode): Location[] {
  if (eslMode === 'No') return LOCATIONS;
  const maxIndex = LEVEL_ORDER.indexOf(eslMode);
  return LOCATIONS.filter((loc) => LEVEL_ORDER.indexOf(loc.level) <= maxIndex);
}
