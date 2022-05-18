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

		thesis_arg() {
			return this.$.$mol_state_arg.value('thesis')
		}

		thesis() {
			return this.domain().thesis( this.thesis_arg()! )
		}

		pages() {

			return [
				this.Index_page(),
				... this.User_page().arg() ? [this.User_page()] : [],
				... this.thesis_new() ? [this.Create_page()] : [],
				... this.thesis_arg() ? [this.Thesis_page()] : [],
			]

		}

		state_holding() {
			this.domain().index().record('qwe123qwe123qwezzxc_', ['123'])
			this.domain().index().search('hello')
			return this.domain().index().state()
		}

		auto() {
			this.state_holding()
		}
	}

}
