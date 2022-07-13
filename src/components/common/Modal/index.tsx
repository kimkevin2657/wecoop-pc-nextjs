// Auth
import AuthCompleteModal from './_fragments/AuthCompleteModal';
import AuthSocialModal from './_fragments/AuthSocialModal';
import AuthUserTypeModal from './_fragments/AuthUserTypeModal';

const Modal = () => {
  return (
    <>
      {/* Auth */}
      <AuthSocialModal />
      <AuthUserTypeModal />
      <AuthCompleteModal />
    </>
  );
};

export default Modal;
