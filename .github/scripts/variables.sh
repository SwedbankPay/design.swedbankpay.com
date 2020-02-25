if [ "$BRAND" == "payex" ]; then
    echo ::set-env name=BRAND_URL::https://payexdesignguide.z16.web.core.windows.net
    echo ::set-env name=BRAND_BUILD_SCRIPT::build:prod:payex
    echo ::set-output name=BRAND_BUILD_SCRIPT::build:prod:payex
elif [ "$BRAND" == "swedbankpay" ]; then
    echo ::set-env name=BRAND_URL::https://swedbankpaydesignguide.z16.web.core.windows.net
    echo ::set-env name=BRAND_BUILD_SCRIPT::build:prod
    echo ::set-output name=BRAND_BUILD_SCRIPT::build:prod
else
    echo "Unknown brand!"
fi