namespace $.$$ {

	export class $hyoo_ergo_thesis_page extends $.$hyoo_ergo_thesis_page {

		text() {
			return this.thesis().edition().text()
		}

		thesis_id() {
			return this.thesis().id()
		}

		request_id(id: string) {
			return id
		}

		request_message(id: string) {
			return this.domain().request().item(id).message()
		}

		requests() {
			return this.thesis().requests().map( obj => this.Request( obj.id() ) )
		}

	}

}
