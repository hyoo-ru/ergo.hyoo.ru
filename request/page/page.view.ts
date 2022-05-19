namespace $.$$ {

	export class $hyoo_ergo_request_page extends $.$hyoo_ergo_request_page {

		thesis() {
			return this.request().thesis()
		}

		thesis_content() {
			return this.thesis().edition()?.content()
		}

	}

}
