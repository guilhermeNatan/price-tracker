export const SHOW_MESSAGE_ACT = 'SHOW_MESSAGE_ACT';
export const showMessageAct  = payload => ({
    type: SHOW_MESSAGE_ACT ,
    payload,
});


export const CLOSSE_MESSAGE_ACT = 'CLOSSE_MESSAGE_ACT';
export const closseMessageAct  = () => ({
    type: CLOSSE_MESSAGE_ACT
});
