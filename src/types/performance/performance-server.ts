// 변수 용도는 ERD 참고
export interface ServerPerformance {
  id: number;
  mt20id: string; // 공연 ID
  prfnm: string; // 공연명
  prfpdfrom: string; // 시작일
  prfpdto: string; // 종료일
  genrenm: string; // 장르명
  prfstate: string; // 공연 상태
  fcltynm: string; // 공연시설명
  openrun: boolean; // 오픈런 가능 여부
  area: string; // 공연 지역
  poster: string; // 포스터 주소
  like_count: number; // 좋아요 수
}

export interface ServerPerformanceDetails {
  id: number;
  mt20id: string; // 공연 상세 ID
  mt10id: string; // 시설 상세 ID
  prfcast: string; // 공연 출연진
  prfruntime: string; // 공연 런타임
  prfage: string; // 공연 관람 연령
  pcseguidance: string; // 티켓 가격
  styurl: string; // 소개 이미지
  dtguidance: string; // 공연 시간
  relatenm: string; // 관련 대여 정보
  relateurl: string; // 예약 사이트
  perform_id: number; // 공연 ID
  sty: string; // 공연 줄거리
}
