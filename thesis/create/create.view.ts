namespace $.$$ {

	export class $hyoo_ergo_thesis_create extends $.$hyoo_ergo_thesis_create {

		@ $mol_mem
		text(next?: string) {
			return this.$.$mol_state_local.value('thesis_create', next) ?? ''
		}

		publish() {
			const thesis = this.domain().thesis().create(this.text())
			this.$.$mol_state_arg.value('thesis', thesis.id())
			this.text('')
		}

	}

}
