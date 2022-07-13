type SocialType = 'kakao' | 'naver' | 'facebook' | 'google' | 'apple';

interface SocialDataProps {
  social: SocialType;
  link: string;
}
interface SocialButtonProps {
  data: SocialDataProps;
  size: 'md' | 'sm';
}

interface SocialData {
  social: SocialType;
  icon: string;
  text: string;
}
