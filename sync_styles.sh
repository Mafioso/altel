#!/bin/bash
git pull
scp -P 3715 -i ~/.ssh/id_rsa -r ~/work/altel/converted-html/public/* root@altel.v3na.kz:/var/www/altel/bitrix/templates/altel/public
scp -i ~/.ssh/id_rsa -r ~/work/altel/converted-html/public/* wwwadmin@10.254.2.19:/var/www/html/bitrix/templates/altel/public
