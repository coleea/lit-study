# 이 프로젝트는 vite의 보일러플레이트에 기반한 lit 2.0 getting started를 수행하였음
# lit 2.0 소개

lit는 리액트의 클래스 컴포넌트와 비슷하다  
lit를 쓰려면 lit 컴포넌트가 정의된 js파일을 script type="module"로 임포트하라  
그리하면 js파일 내부에서 호출된 window.customElements.define() 메소드에 의해 커스텀 엘리먼트로 등록된다  
커스텀 엘리먼트는 다른말로 웹컴포넌트이고 define메소드가 완료되면 네이티브 html 엘리먼트처럼 사용할수있다. ReactDOM.render같은 js기반 렌더링이 필요없다.  
웹컴포넌트는 쉐도우돔 기반이므로 css in js는 기본이다  
lit는 기본적으로 CSR이지만 SSR도 가능하다  
프로퍼티 선언은 constructor에서 하시오  