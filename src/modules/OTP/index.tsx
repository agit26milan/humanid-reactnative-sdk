import React, {useContext} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import Logo from './Logo';
import styles from './styles';
import Description from './Description';
import Form from './Form';
import {Context} from '../../core/Context';

function OTP(): JSX.Element {
  const {loginOTPVisible, setLoginOTPVisible} = useContext(Context);

  const hideSelf = () => {
    setLoginOTPVisible(false);
  };

  return (
    <Modal
      useNativeDriver={true}
      style={styles.modal}
      isVisible={loginOTPVisible}
      backdropOpacity={0.3}
      onBackdropPress={hideSelf}
      onBackButtonPress={hideSelf}>
      <View style={styles.container}>
        <Logo />
        <Description />
        <Form />
      </View>
    </Modal>
  );
}

export default OTP;