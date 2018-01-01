#!/bin/sh
aws s3 cp index.html s3://laundry-monitoring-service-web-site-prod --acl public-read
aws s3 cp default.jpg s3://laundry-monitoring-service-web-site-prod --acl public-read
