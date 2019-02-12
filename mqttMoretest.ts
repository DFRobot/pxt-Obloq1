let message = ""
Obloq.Obloq_mqtt_callback_user(function (message) {
    basic.showString(message)
})
Obloq.Obloq_mqtt_callback_user_more(TOPIC.topic_1, function (message) {
    basic.showString(message)
})
Obloq.Obloq_mqtt_callback_user_more(TOPIC.topic_2, function (message) {
    basic.showString(message)
})
Obloq.Obloq_mqtt_callback_user_more(TOPIC.topic_3, function (message) {
    basic.showString(message)
})
Obloq.Obloq_mqtt_callback_user_more(TOPIC.topic_4, function (message) {
    basic.showString(message)
})
Obloq.Obloq_mqtt_setup(
SerialPin.P1,
SerialPin.P2,
"dfrobotYanfa",
"hidfrobot",
"HJZTNhw3fm",
"HyGp4hD2zm",
"rJq_biTXQ",
Obloq.SERVERS.China
)
Obloq.Obloq_mqtt_add_topic(TOPIC.topic_1, "Bkt_-i6mm")
Obloq.Obloq_mqtt_add_topic(TOPIC.topic_2, "ByG_bopQX")
Obloq.Obloq_mqtt_add_topic(TOPIC.topic_3, "HJlO-iaQQ")
Obloq.Obloq_mqtt_add_topic(TOPIC.topic_4, "SkTDbjp7Q")
basic.forever(() => {
    Obloq.Obloq_mqtt_send_message("0")
    basic.pause(1000)
    Obloq.Obloq_mqtt_send_message_more("1", TOPIC.topic_1)
    basic.pause(1000)
    Obloq.Obloq_mqtt_send_message_more("2", TOPIC.topic_2)
    basic.pause(1000)
    Obloq.Obloq_mqtt_send_message_more("3", TOPIC.topic_3)
    basic.pause(1000)
    Obloq.Obloq_mqtt_send_message_more("4", TOPIC.topic_4)
    basic.pause(1000)
})
