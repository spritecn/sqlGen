-- 插入线路
INSERT INTO channel_line(uuid, deleted, mainAccountUuid, subAccountUuid, bizTypeUuid, channelUuid, lineName, outlinenum, linePassword, lineCode, supplier, supplierIP, supplierPort, juhengIP, province, city, status, bindTime, subAccountCode, createdTime) VALUES (UUID(), 0, '{0}', '{1}', '230CB730-4244-4722-8F3A-02543AF02428', '4E40DEC4-AF9A-486B-AC40-EFFBA48175F0', '{2}', '{2}', '{3}', 'g729', '{4}', '{5}', {6}, '{7}', '上海', '上海市', '1', '2020-02-13', '{8}', '2020-02-13');

0:mainAccountUuid
1:subAccountUuid
2:lineName
3:linePassword
4:supplier,供应商,如兆程
5:supplierIP,兆程:222.73.105.211,麦田 120.26.197.133
6:supplierPort,兆程:8060,其他为5060
7:juhengIP,ASK服务器ip
8:门店号,如81306103


-- 插入分机
INSERT INTO channel_extension(uuid, deleted, mainAccountUuid, subAccountUuid, code, number, password, server, bizTypeUuid, channelUuid, createdTime, updatedTime) VALUES (UUID(), 0, '{0}', '{1}', 'g729', '{2}', '{3}', '{4}', '230CB730-4244-4722-8F3A-02543AF02428', '4E40DEC4-AF9A-486B-AC40-EFFBA48175F0', NOW(), NULL);

0:mainAccountUuid
1:subAccountUuid
2:number,分机号
3:password
4:serverIP:222.73.105.227



