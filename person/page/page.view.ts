namespace $.$$ {

	export class $hyoo_ergo_person_page extends $.$hyoo_ergo_person_page {

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
