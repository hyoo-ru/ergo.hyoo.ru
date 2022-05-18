namespace $.$$ {

	export class $hyoo_ergo extends $.$hyoo_ergo {

		user() {
			return this.domain().user()
		}

		user_id() {
			return this.user().id()
		}

		@ $mol_mem
		user_page_auto_open() {
			// if (!this.user_name_defined()) this.user_page_open()
			return true
		}

		thesis_new() {
			return this.$.$mol_state_arg.value('thesis_new') === ''
		}

		thesis() {
			const id = this.$.$mol_state_arg.value('thesis')
			return id ? this.domain().thesis(id) : null
		}

		pages() {

			return [
				this.Index_page(),
				... this.User_page().arg() ? [this.User_page()] : [],
				... this.thesis_new() ? [this.Create_page()] : [],
				... this.thesis() ? [this.Thesis_page()] : [],
			]

		}

		auto() {
			this.user_page_auto_open()
		}
	}

}
