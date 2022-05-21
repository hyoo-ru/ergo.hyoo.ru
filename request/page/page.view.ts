namespace $.$$ {

	export class $hyoo_ergo_request_page extends $.$hyoo_ergo_request_page {

		thesis() {
			return this.request().thesis()
		}

		text_changed() {
			return this.request().edition().text()
		}

		message() {
			return this.request().message()
		}

		creator_name() {
			return this.request().creator().name()
		}

		moment() {
			return this.request().moment().toString('DD-MM-YY hh:mm:ss')
		}

	}

}
