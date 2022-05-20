namespace $.$$ {

	export class $hyoo_ergo extends $.$hyoo_ergo {

		user() {
			return this.domain().user()
		}

		user_id() {
			return this.user().id()
		}

		user_opened() {
			return this.$.$mol_state_arg.value('user')
		}


		thesis_new_opened() {
			return this.$.$mol_state_arg.value('thesis_new') === ''
		}

		thesis_opened() {
			return this.$.$mol_state_arg.value('thesis')
		}

		thesis() {
			return this.domain().thesis().item( this.thesis_opened()! )
		}


		request_new_opened() {
			return this.$.$mol_state_arg.value('request_new') === ''
		}


		pages() {

			this.domain().state().socket()
			this.domain().index().state().sync()

			return [
				this.Index_page(),
				... this.user_opened() ? [this.User_page()] : [],
				... this.thesis_new_opened() ? [this.Thesis_create_page()] : [],
				... this.thesis_opened() ? [this.Thesis_page()] : [],
				... this.request_new_opened() ? [this.Request_create_page()] : [],
			]

		}

	}

}
