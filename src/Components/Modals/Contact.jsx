import { Button, Modal } from "antd";
import { useState } from "react";



export const ContactModal = () => {
    const [showModal, setShowModal] = useState(false);
    return(
        <>
            <Button type="ghost" onClick={() => setShowModal(true)}>
                Let's get in touch
            </Button>
            <Modal 
                title='Contact' 
                visible={showModal}
                onCancel={() => setShowModal(false)}
                onOk={() => setShowModal(false)}    
            >

            </Modal>
        </>
    );
}