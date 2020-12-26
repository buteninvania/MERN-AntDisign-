import React from 'react'
import {message} from 'antd'

const success = (mes) => {
    message.success(mes);
};

const error = (mes) => {
    message.error(mes);
};

const warning = (mes) => {
    message.warning(mes);
};

export const useFeedBackMessage = (messageText: string | null, mode: string | null) => {

    if (mode && messageText) {
        if(mode == "error") {
            // message.error(messageText);
            error(messageText)
        } else if (mode == "success") {
            // message.success(messageText);
            success(messageText)
        }else if (mode == "warning") {
            // message.warning(messageText);
            warning(messageText)
        }
    }

}
