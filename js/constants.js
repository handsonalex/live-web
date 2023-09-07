let server_addr="http://localhost:8081";
let gift_server_addr="http://localhost:8082";

let sendSmsUrl = server_addr + "/user/sendLoginCode";
let mobileLoginUrl = server_addr + "/user/mobileLogin";
let listLivingRoomUrl = server_addr + "/livingRoom/listLivingRoom";
let initInfoUrl = server_addr + "/index/initInfo";
let enterLivingRoomUrl = server_addr + "/livingRoom/enterLivingRoom";
let isEnterUrl = server_addr + "/livingRoom/isEnter";
let listGiftUrl = server_addr + "/gift/listGift";
let sendGiftUrl = gift_server_addr + "/gift/sendGift";
let listGiftRankUrl = gift_server_addr + "/gift/listRank";
let listBankInfoUrl = server_addr + "/pay/info";
let listPayProductsUrl = server_addr + "/pay/products";
let createPreOrder = server_addr + "/pay/createPreOrder";
let startLivingRoom = server_addr + "/livingRoom/startLiving";
let closeLivingRoom = server_addr + "/livingRoom/closeLivingRoom";
let livingRoomAckUrl = server_addr + "/livingRoom/livingRoomAck";
let connectMicUrl = server_addr + "/livingRoom/connectMic";