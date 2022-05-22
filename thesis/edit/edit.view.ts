namespace $.$$ {

	export class $hyoo_ergo_thesis_edit extends $.$hyoo_ergo_thesis_edit {

		thesis() {
			return this.proposal().thesis()
		}

		@ $mol_mem
		thesis_title(next?: string) {
			return next ?? this.thesis().edition().title()
		}

		@ $mol_mem
		thesis_text(next?: string) {
			return next ?? this.thesis().edition().text()
		}

		publish() {
			const edition = this.thesis().edition().child_add(this.proposal())
			edition.title(this.thesis_title())
			edition.text(this.thesis_text())
			this.thesis().edition(edition)
			this.proposal().status('completed')
			this.$.$mol_state_arg.value('thesis_edit', null)
		}

	}

}
