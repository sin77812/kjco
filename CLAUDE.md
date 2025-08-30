# CLAUDE.md - K&J Company 웹사이트 개발 지침서

## 프로젝트 개요
K&J Company (밤세아엔터테인먼트) BJ/크리에이터 매니지먼트 회사 웹사이트 개발

## 핵심 요구사항
- **디자인**: 미니멀&클린, 이미지 중심, 직관적 구조
- **목표**: 신뢰감 있는 첫인상, 빠른 지원 유도, 명확한 정보 전달
- **필수**: 모바일 반응형, 관리자 페이지 포함

## 기술 스택
- Frontend: HTML5, CSS3, JavaScript (Vanilla)
- Backend: Node.js + Express 또는 PHP
- Database: MySQL 또는 PostgreSQL
- 스타일: Bootstrap 5 또는 순수 CSS Grid/Flexbox
- 애니메이션: AOS Library (Animate On Scroll)

## 컬러 시스템
```css
:root {
  --deep-blue: #0B5394;    /* 메인 브랜드 컬러 */
  --pure-white: #FFFFFF;   /* 배경 */
  --sky-blue: #4A90E2;     /* 포인트, CTA 버튼 */
  --text-primary: #333333;
  --text-secondary: #666666;
  --bg-section: #F8F9FA;
  --border-color: #E5E5E5;
}
```

## 폴더 구조
```
kj-company/
├── index.html              # 메인 페이지
├── about.html             # 회사소개
├── service.html           # 서비스
├── creators.html          # 크리에이터
├── notice.html            # 공지사항&이벤트
├── apply.html             # 지원하기
├── admin/                 # 관리자 페이지
│   ├── index.html
│   ├── login.html
│   └── dashboard.html
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── responsive.css
│   │   └── admin.css
│   ├── js/
│   │   ├── main.js
│   │   ├── animation.js
│   │   └── admin.js
│   ├── images/
│   │   ├── hero/
│   │   ├── creators/
│   │   ├── service/
│   │   └── icons/
│   └── fonts/
├── backend/               # 백엔드 (선택사항)
│   ├── api/
│   ├── config/
│   └── database/
└── README.md
```

## 페이지별 구현 사항

### 1. 메인 페이지 (index.html)
```html
<!-- 구조 -->
<header> - 로고, 네비게이션, 지원하기 버튼
<section class="hero"> - 풀스크린 배경, 메인 텍스트
<section class="services"> - 4그리드 서비스 소개
<section class="creators"> - BJ 갤러리
<section class="cta-banner"> - 모집 안내 배너
<footer> - 회사 정보
```

**히어로 섹션 텍스트**:
- 메인: "새로운 시작을 함께할 BJ & 게스트를 모집합니다"
- 서브: "K&J COMPANY"

**서비스 그리드 내용**:
1. 방송 아르바이트 - 시급제, 최소 일당 40만원
2. 개인방송 - 소속 BJ, 월 1200~3500만원
3. 단체방송 - 크루 활동, 협의 가능
4. 일일체험 - 부담없는 시작, 3시간 체험

### 2. 회사소개 (about.html)
- 회사 소개 텍스트: "믿음직한 파트너, K&J Company"
- 숫자 카운터: 110+ 채용진행, 40만원~ 최소일당, 1:1 맞춤관리
- 시설 갤러리
- 오시는 길 (지도)

### 3. 서비스 (service.html)
**탭 구조로 4개 서비스 표시**:

#### 방송 아르바이트 (시급제)
- 개인공간 제공
- 노래/소통방송 가능
- 초기 정착지원금 3개월
- 최소 1200만원~3500만원

#### 개인방송 (소속 BJ)
- 개인공간 or 재택 선택
- 노래, 댄스, 소통, 코부, 먹방 등
- 월 15회 이상 방송
- 수익: 협의

#### 단체방송 (랭킹 10위권내)
- MC 1인 외 3~5명 출연
- 순위별 인센티브
- 일일체험 후 결정 가능

#### 일일체험방송
- 저녁 방송 3~4시간
- 상황별 다름
- 부담없이 체험 가능

### 4. 크리에이터 (creators.html)
```html
<!-- 갤러리 그리드 구조 -->
<div class="creator-grid">
  <div class="creator-card">
    <img src="creator-photo.jpg">
    <h3>이름</h3>
    <p>@인스타그램</p>
    <div class="platform-icons">
      <!-- 아프리카TV, 팬더TV, 유튜브, 트위치 아이콘 -->
    </div>
  </div>
</div>
```

### 5. 지원하기 (apply.html)
**2단 레이아웃**:
- 좌측: 모집분야, 지원자격, 지원절차 (1차 면접 → 2차 미팅 → 방송 시작)
- 우측: 지원 폼 (이름, 연락처, 이메일, 희망분야, 경력, 자기소개)

### 6. 관리자 페이지 (admin/)
**기능 요구사항**:
- 로그인 인증
- 공지사항 CRUD (추가/수정/삭제)
- 소속 BJ 관리 CRUD (사진 업로드 포함)
- 이벤트 관리 CRUD

## 인터랙션 & 애니메이션
```javascript
// 1. 스크롤 페이드인 (AOS 라이브러리 사용)
AOS.init({
  duration: 800,
  once: true
});

// 2. 숫자 카운팅 애니메이션
function countUp(element, target) {
  // 구현 코드
}

// 3. 호버 효과
.creator-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

// 4. 이미지 레이지 로딩
const images = document.querySelectorAll('img[data-src]');
// Intersection Observer 구현
```

## 반응형 브레이크포인트
```css
/* Desktop */
@media (min-width: 1200px) { }

/* Tablet */  
@media (min-width: 768px) and (max-width: 1199px) { }

/* Mobile */
@media (max-width: 767px) { }
```

## SEO & 성능 최적화
- 메타 태그 최적화
- Open Graph 태그
- 이미지 최적화 (WebP 포맷)
- CSS/JS 파일 압축
- 레이지 로딩 구현

## 데이터베이스 스키마 (관리자 기능용)
```sql
-- 공지사항 테이블
CREATE TABLE notices (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  content TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- BJ 정보 테이블
CREATE TABLE creators (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  instagram VARCHAR(100),
  platform VARCHAR(50),
  image_url VARCHAR(255),
  created_at TIMESTAMP
);

-- 이벤트 테이블
CREATE TABLE events (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  content TEXT,
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMP
);

-- 지원서 테이블
CREATE TABLE applications (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  phone VARCHAR(20),
  email VARCHAR(100),
  desired_field VARCHAR(50),
  experience TEXT,
  introduction TEXT,
  created_at TIMESTAMP
);
```

## 개발 우선순위
1. **Phase 1 (MVP)**: 메인, 지원하기, 서비스 페이지
2. **Phase 2**: 크리에이터, 회사소개 페이지
3. **Phase 3**: 관리자 페이지, 공지사항

## 테스트 체크리스트
- [ ] 모든 페이지 반응형 확인
- [ ] 폼 유효성 검사
- [ ] 이미지 로딩 최적화
- [ ] 크로스 브라우저 테스트
- [ ] 모바일 터치 인터랙션
- [ ] 관리자 CRUD 기능
- [ ] SEO 메타 태그

## 주의사항
1. 모든 이미지는 실제 소속 BJ 사진 사용 (초상권 확인 필수)
2. 개인정보 보호 (SSL 인증서 필수)
3. 접근성 고려 (alt 태그, ARIA 레이블)
4. 로딩 속도 3초 이내 목표

## 참고 레퍼런스
- 미니멀 디자인: Apple.com
- 그리드 레이아웃: Stripe.com
- BJ 갤러리: 인스타그램 스타일
- 관리자 페이지: 기본 CRUD 대시보드

---

## 시작하기
```bash
# 프로젝트 시작
1. 이 CLAUDE.md 파일을 참고하여 개발 시작
2. 폴더 구조 생성
3. index.html부터 순차적으로 개발
4. 스타일과 스크립트 추가
5. 관리자 기능은 백엔드 선택 후 구현
```
관리자 기능은 깃 서버에 연동해서 진행할거야 
관리자 기능은 제일 나중에 진행할 수 있도록.

**개발 문의사항이 있으면 각 섹션별로 구체적으로 질문해주세요.**