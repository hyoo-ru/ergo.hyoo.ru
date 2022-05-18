namespace $.$$ {

	export class $hyoo_ergo_person_page extends $.$hyoo_ergo_person_page {

		arg(value?: string) {
			return this.$.$mol_state_arg.value('user', value)
		}

		open() {
			this.arg(this.user().id())
		}

		name_defined() {
			return this.user().name().length > 0
		}

		page_tools() {
			return this.name_defined() ? super.page_tools() : []
		}

		name(next?: string) {
			return this.user().name(next)
		}

	}

}
