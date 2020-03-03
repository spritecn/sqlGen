DELETE FROM billing_account_bill where mainAccountUuid = '{0}';
DELETE FROM billing_meal_config where mainAccountUuid = '{0}';
DELETE FROM billing_month_meal_config where  mainAccountUuid = '{0}';