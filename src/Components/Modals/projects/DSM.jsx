import { Button, Modal } from "antd";
import { useState } from "react";



export const DSMModal = () => {
    const [showModal, setShowModal] = useState(false);
    return(
        <>
            <Button type="ghost" onClick={() => setShowModal(true)}>
                More info
            </Button>
            <Modal 
                title='Contact' 
                visible={showModal}
                onCancel={() => setShowModal(false)}
                onOk={() => setShowModal(false)}    
            >
                UFA
            </Modal>
        </>
    );
}