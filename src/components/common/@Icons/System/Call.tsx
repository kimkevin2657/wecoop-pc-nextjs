import { Icon, IconProps } from '@chakra-ui/react';

const CallIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M15.752 21.353C15.2049 21.353 14.6601 21.2804 14.132 21.137C11.852 20.4478 9.79304 19.1719 8.16106 17.4369C5.93328 15.359 4.47948 12.5844 4.03905 9.57001C3.9296 8.59949 4.07333 7.61716 4.45624 6.71869C4.83914 5.82021 5.44817 5.03626 6.22404 4.44305L6.36705 4.33197C6.69395 4.09251 7.09465 3.97563 7.49902 4.00177C7.9034 4.02791 8.28571 4.19548 8.57905 4.47504L10.1431 6.03802C10.4552 6.35318 10.6317 6.77784 10.6351 7.22137C10.6385 7.6649 10.4683 8.0922 10.1611 8.41205L9.42905 9.36395C9.25512 9.59117 9.14452 9.86048 9.1085 10.1443C9.07249 10.4282 9.11236 10.7166 9.22404 10.98C9.94604 12.68 11.5531 15.624 14.1951 16.214C14.4309 16.2647 14.675 16.2628 14.91 16.2086C15.1451 16.1543 15.3653 16.0489 15.5551 15.9L16.739 14.989C17.059 14.6821 17.4861 14.5124 17.9294 14.5159C18.3727 14.5195 18.7971 14.6961 19.112 15.008L20.6761 16.571C20.9594 16.8669 21.1281 17.254 21.1521 17.6629C21.1761 18.0719 21.0538 18.476 20.8071 18.803L20.707 18.929C20.118 19.6812 19.3661 20.2901 18.5079 20.7099C17.6497 21.1297 16.7074 21.3496 15.752 21.353ZM4.80405 9.47906C5.22452 12.3218 6.59993 14.9368 8.70405 16.894C10.2417 18.5328 12.1822 19.7396 14.332 20.394C15.3774 20.6723 16.4816 20.637 17.507 20.2924C18.5325 19.9478 19.4339 19.3091 20.099 18.456L20.199 18.33C20.3306 18.1518 20.3955 17.9333 20.3825 17.7122C20.3695 17.4912 20.2795 17.2816 20.128 17.1201L18.5641 15.558C18.3913 15.3863 18.1576 15.2899 17.914 15.2899C17.6705 15.2899 17.4368 15.3863 17.2641 15.558L17.227 15.591L16.0271 16.517C15.7474 16.7349 15.4233 16.8886 15.0777 16.9672C14.7321 17.0459 14.3734 17.0474 14.0271 16.972C11.0481 16.307 9.29405 13.1251 8.51405 11.2861C8.34835 10.8971 8.28882 10.471 8.34152 10.0515C8.39423 9.63193 8.55729 9.23394 8.81406 8.89801L9.59305 7.88995C9.7638 7.7167 9.85953 7.48331 9.85953 7.24005C9.85953 6.99679 9.7638 6.76328 9.59305 6.59003L8.02905 5.02704C7.869 4.87709 7.66187 4.78736 7.44302 4.77313C7.22417 4.75891 7.00717 4.82107 6.82905 4.94903L6.68605 5.05902C6.01592 5.57054 5.48964 6.24689 5.15843 7.02215C4.82723 7.79742 4.70238 8.64514 4.79605 9.48297L4.80405 9.47906Z"
        fill="currentColor"
        stroke="currentColor"
      />
    </Icon>
  );
};

export default CallIcon;