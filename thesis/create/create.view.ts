namespace $.$$ {

	export class $hyoo_ergo_thesis_create extends $.$hyoo_ergo_thesis_create {

		text(next?: string) {
			return this.$.$mol_state_local.value(`${this}.text()`, next) ?? ''
		}

		title(next?: string) {
			return this.$.$mol_state_local.value(`${this}.title()`, next) ?? ''
		}

		publish() {
			const thesis = this.domain().thesis().create(this.text(), this.title())
			this.$.$mol_state_arg.value('thesis', thesis.id())

			this.text('')
			this.title('')
		}

		publish_enabled() {
			return this.text().length > 0 && this.title().length > 0
		}

	}

}
