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


		thesis_new_id() {
			return $mol_guid()
		}

		thesis_new_opened() {
			return this.$.$mol_state_arg.value('thesis_new')
		}

		thesis_new() {
			return this.domain().thesis( this.thesis_new_opened()! )
		}


		thesis_opened() {
			return this.$.$mol_state_arg.value('thesis')
		}

		thesis() {
			return this.domain().thesis( this.thesis_opened()! )
		}

		thesis_change_opened() {
			return this.$.$mol_state_arg.value('change')
		}

		thesis_change() {
			return this.domain().thesis( this.thesis_change_opened()! )
		}

		pages() {

			this.domain().state().socket()
			this.domain().index().state().sync()

			return [
				this.Index_page(),
				... this.user_opened() ? [this.User_page()] : [],
				... this.thesis_new_opened() ? [this.Thesis_create_page()] : [],
				... this.thesis_opened() ? [this.Thesis_page()] : [],
				... this.thesis_change_opened() ? [this.Change_page()] : [],
			]

		}

	}

}
