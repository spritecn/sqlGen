DELETE FROM channel_business_number where mainAccountUuid = '{0}';
DELETE FROM channel_marketing_number where mainAccountUuid = '{0}';
DELETE FROM channel_accountChannelBinding where accountUuid = '{0}';
DELETE FROM  channel_line where mainAccountUuid = '{0}';
DELETE FROM  channel_extension where mainAccountUuid = '{0}';