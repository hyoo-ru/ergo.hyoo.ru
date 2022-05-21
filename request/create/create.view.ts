namespace $.$$ {

	export class $hyoo_ergo_request_create extends $.$hyoo_ergo_request_create {

		change_text(next?: string) {
			return this.$.$mol_state_local.value('request_new#change_text', next) ?? this.thesis().edition().text()
		}

		message(next?: string) {
			return this.$.$mol_state_local.value('request_new#message', next) ?? ''
		}

		clear() {
			this.change_text('')
			this.message('')
		}

		publish() {
			if (this.Type().current() === '0') { // change type
				const request = this.domain().request().publish_change(this.thesis(), this.change_text(), this.message())
				this.clear()
				this.$.$mol_state_arg.value('request', request.id())
			}
		}

	}

}
