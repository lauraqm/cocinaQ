import React from "react";
import { Modal, Button } from 'antd';

class ImageModal extends React.Component {
  onClose () {
    this.props.onClose();
  }

  render() {
    const { isOpen, url } = this.props;
    return (
      <Modal
          title="Imagen del proceso"
          visible={isOpen}
          onCancel={() => {this.onClose()}}
          footer={[
            <Button key="close" onClick={() => {this.onClose()}}>
              Cerrar
            </Button>,
          ]}
        >
          <img src={url}></img>
      </Modal>
    );
  }
}

export default ImageModal;
