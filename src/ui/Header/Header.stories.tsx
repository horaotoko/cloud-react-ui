import { HeaderContainer } from "./HeaderContainer";
import { Icon, Text } from "../../components";

export default {
  component: HeaderContainer,
  title: "ui/Header",
};

export const Header = (): React.ReactElement => {
  const left = (
    <svg
      width="140"
      height="20"
      viewBox="0 0 140 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8835 1.09818C17.1592 0.433199 17.8083 -0.000235045 18.5281 9.56256e-08C19.5108 0.000356685 20.3073 0.79714 20.3072 1.77985C20.3071 2.4997 19.8734 3.14862 19.2083 3.42398C18.5432 3.69935 17.7777 3.54694 17.2688 3.03782C16.7599 2.5287 16.6079 1.76315 16.8835 1.09818ZM14.5804 10.7097L17.4072 6.10191C18.9544 10.4796 16.9007 15.3139 12.6758 17.2396C8.45098 19.1652 3.455 17.5441 1.16568 13.5047C-1.12364 9.46534 0.052384 4.34627 3.8751 1.71101C7.69781 -0.924247 12.9004 -0.202388 15.8612 3.37409L13.3354 7.49217L11.4615 4.81583C11.1656 4.39259 10.657 4.17143 10.1457 4.2436C9.63429 4.31577 9.20681 4.66904 9.03958 5.15765L7.80204 8.77338L6.71135 7.38799C6.39635 6.98751 5.88532 6.79462 5.38427 6.8871C4.88321 6.97957 4.4747 7.34216 4.32341 7.8287L2.79422 12.7405C2.56904 13.4639 2.97289 14.2328 3.69624 14.458C4.4196 14.6832 5.18854 14.2794 5.41372 13.556L6.1686 11.1336L7.20587 12.4511C7.51678 12.8458 8.01856 13.039 8.51385 12.9546C9.00914 12.8703 9.41871 12.5219 9.58146 12.0466L10.761 8.59933L12.2869 10.7792C12.5521 11.158 12.9903 11.3778 13.4524 11.3637C13.9146 11.3497 14.3387 11.1039 14.5804 10.7097ZM34.4046 2.18339L36.3035 15.1956H33.8152L32.8066 7.3292H32.7733L29.8991 15.3641H29.0422L26.2663 7.32916H26.2338L25.1069 15.1956H22.6187L24.7534 2.18339H26.5023L29.629 10.5401L32.6216 2.18339H34.4046ZM45.8725 11.0778C45.8907 12.6392 45.0682 14.0898 43.719 14.8758C42.3697 15.6618 40.7021 15.6618 39.3529 14.8758C38.0036 14.0898 37.1811 12.6392 37.1993 11.0778C37.175 9.51242 37.9962 8.05545 39.348 7.26567C40.6997 6.47588 42.3722 6.47588 43.7239 7.26567C45.0756 8.05545 45.8968 9.51242 45.8725 11.0778ZM42.6233 9.08294C43.2831 9.51626 43.6225 10.3001 43.487 11.0778C43.6165 11.8523 43.2756 12.63 42.6183 13.0595C41.961 13.4891 41.1118 13.4891 40.4545 13.0595C39.7971 12.63 39.4562 11.8523 39.5857 11.0778C39.4503 10.3001 39.7896 9.51626 40.4495 9.08294C41.1093 8.64962 41.9634 8.64962 42.6233 9.08294ZM51.9282 6.67316C51.0824 6.62227 50.2699 7.00949 49.7767 7.69844H49.7425V6.94145H47.3893V15.1956H49.7425V11.1119C49.7425 10.1191 49.7601 8.55616 51.1545 8.55616C52.4363 8.55616 52.4343 9.74677 52.4326 10.7216L52.4325 10.826V15.1955H54.7856V10.1524C54.7856 8.23695 54.1471 6.67316 51.9282 6.67316ZM64.208 11.4478V11.1619C64.208 8.67286 62.9977 6.67316 60.2921 6.67319C57.6187 6.67319 56.2908 8.64043 56.2908 11.1444C56.2908 13.6502 57.8537 15.4657 60.4086 15.4657C62.0905 15.5342 63.6167 14.4871 64.1581 12.8932L61.9891 12.5407C61.7436 13.2051 61.1168 13.6518 60.4086 13.6669C59.1808 13.6669 58.779 12.4889 58.779 11.4478H64.208ZM61.9891 9.98493C61.9627 9.11504 61.2919 8.40137 60.4253 8.32109C59.5473 8.38296 58.8619 9.10495 58.8457 9.98493H61.9891ZM67.2471 6.94145L69.2153 11.6337L71.3326 6.94145H73.9567L67.9533 19.601H65.365L68.0882 13.9379L64.5747 6.94145H67.2471ZM92.6071 11.0778C92.624 12.6388 91.8009 14.0885 90.4518 14.8739C89.1027 15.6593 87.4357 15.6593 86.0865 14.8739C84.7374 14.0885 83.9144 12.6388 83.9313 11.0778C83.9073 9.51215 84.7288 8.05507 86.0808 7.26525C87.4328 6.47543 89.1056 6.47543 90.4576 7.26525C91.8096 8.05507 92.6311 9.51215 92.6071 11.0778ZM89.3561 9.08294C90.0159 9.51626 90.3553 10.3001 90.2198 11.0778C90.3494 11.8523 90.0084 12.63 89.3511 13.0595C88.6938 13.4891 87.8446 13.4891 87.1873 13.0595C86.53 12.63 86.1891 11.8523 86.3186 11.0778C86.1831 10.3001 86.5225 9.51626 87.1823 9.08294C87.8421 8.64962 88.6963 8.64962 89.3561 9.08294ZM96.3398 7.79926H96.3064V6.94145H93.9524V15.1956H96.3064V11.4821C96.3064 10.2041 96.474 8.75789 98.1053 8.75789C98.454 8.75471 98.795 8.86052 99.0806 9.06053L99.3665 6.87486C99.0562 6.74854 98.7254 6.68018 98.3904 6.67316C97.5559 6.65971 96.7762 7.08784 96.3398 7.79926ZM122.876 6.94145H120.556L120.556 7.71595C119.975 7.05147 119.135 6.67115 118.252 6.67316C115.882 6.67316 114.487 8.84121 114.487 11.0277C114.487 13.2616 115.865 15.4657 118.286 15.4657C119.148 15.4792 119.97 15.1024 120.523 14.4404H120.556V15.1956H122.876V6.94145ZM120.791 11.0619C120.918 10.2862 120.575 9.50886 119.916 9.07974C119.258 8.65062 118.408 8.65062 117.749 9.07974C117.091 9.50886 116.748 10.2862 116.874 11.0619C116.742 11.8409 117.083 12.6242 117.744 13.0571C118.405 13.4899 119.26 13.4899 119.921 13.0571C120.582 12.6242 120.924 11.8409 120.791 11.0619ZM127.177 7.79926H127.21C127.647 7.0882 128.426 6.66018 129.26 6.67316C129.595 6.6801 129.926 6.74847 130.236 6.87486L129.95 9.06053C129.665 8.8602 129.324 8.75435 128.975 8.75789C127.346 8.75789 127.176 10.2041 127.176 11.4821V15.1956H124.822V6.94145H127.177V7.79926ZM139.054 2.52026V15.1956H136.7V14.4228H136.667C136.131 15.0981 135.31 15.484 134.449 15.4657C132.027 15.4657 130.648 13.2616 130.648 11.0277C130.648 8.8412 132.044 6.67315 134.415 6.67315C135.281 6.66259 136.106 7.03843 136.667 7.69843H136.7V2.52025L139.054 2.52026ZM136.067 9.08007C136.725 9.50966 137.066 10.2875 136.936 11.0619C137.072 11.8396 136.732 12.6234 136.072 13.0567C135.413 13.4901 134.558 13.4901 133.899 13.0567C133.239 12.6234 132.899 11.8396 133.035 11.0619C132.905 10.2875 133.246 9.50966 133.904 9.08007C134.561 8.65048 135.41 8.65048 136.067 9.08007ZM77.0471 15.1956H79.5195V9.61571H83.0996V7.46251H79.5194V4.67257H83.3338V2.52026H77.047L77.0471 15.1956ZM118.059 2.63948C118.026 3.02249 117.867 4.88504 117.873 4.88525C116.56 4.92162 115.335 5.55235 114.542 6.59977C114.043 7.22946 113.612 7.90931 113.254 8.62834C112.712 9.68741 111.603 12.1188 110.855 13.7582L110.855 13.759C110.518 14.4973 110.255 15.0748 110.15 15.2939C110.146 15.3023 110.14 15.3148 110.135 15.3269C110.126 15.346 110.118 15.3642 110.118 15.3642L108.927 15.364L107.159 10.3384L105.193 15.364H103.982L100.184 6.9414H102.755L104.578 11.3013L106.487 6.67314H107.794L109.661 11.1804C109.743 11.0262 109.815 10.8828 109.867 10.7694L110.103 10.2556C110.67 8.90586 111.326 7.59491 112.066 6.33131C113.069 4.59146 114.708 3.30812 116.637 2.75082C117.104 2.63386 117.583 2.57353 118.065 2.57112L118.059 2.63948Z"
        fill="#0054AC"
      />
    </svg>
  );

  const right = (
    <>
      <Text size="small">ユーザー</Text>
      <Icon icon="caretUp" rotation={180} />
    </>
  );

  return <HeaderContainer left={left} right={right} />;
};
