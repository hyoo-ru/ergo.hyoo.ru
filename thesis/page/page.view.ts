namespace $.$$ {

	export class $hyoo_ergo_thesis_page extends $.$hyoo_ergo_thesis_page {

		text() {
			return this.thesis().edition().text()
		}


		request_id(id: string) {
			return id
		}

		request_title(id: string) {
			return this.domain().request().item(id).message()
		}

		requests() {
			return this.thesis().requests().map( obj => this.Request( obj.id() ) )
		}

		request_create() {
			// const request = this.domain().request().create(this.thesis())
			// this.$.$mol_state_arg.value('request', request.id())
		}

	}

}
