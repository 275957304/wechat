import { wxRequest } from '@/utils/wxRequest';

const apiMall = '#'

//微信的jscode换取sessionKey
const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/api/wechat/jscode2session");

export default {
	wxJsCode2Session  
}

/*

import api from '@/api/api'

const json = await api.wxJsCode2Session({
	query: {
		orderNo: this.orderNo
	}
});


*/