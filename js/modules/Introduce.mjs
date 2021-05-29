import Page from '../components/Page.mjs';
import Logo from '../components/Logo.mjs';

export default {
  name: 'introduce',
  components: { Page, Logo },
  template: `
    <Page class="otherModule">
      <template v-slot:header>
        <h2 class="otherModule__title">About</h2>
      </template>
      <div class="otherModule__content aboutPage">
        <Logo color="#ff7b28" class="aboutPage__logo" />
        <h1 class="aboutPage__title">날씨딱대</h1>
        <h2 class="aboutPage__subject">Weather Ttakdae</h2>
        <p class="aboutPage__description">
          날씨딱대는 숭실대학교의 학생들이 수업에 대한 과제를 하면서 탄생한 서비스입니다.<br /><br />
          다양한 날씨와 이미지를 보여주어서 직관적으로 알려주는 서비스이며 대학생답게 발랄하며 재미있는 네이밍과 로고
          그리고 개발자들의 전문 기술이 들어간 신박하면서 재미있는 어플입니다.
        </p>
      </div>
    </Page>
  `
}