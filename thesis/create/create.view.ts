namespace $.$$ {

	export class $hyoo_ergo_thesis_create extends $.$hyoo_ergo_thesis_create {

		@ $mol_mem
		content(next?: string) {
			return this.thesis().edition()?.content(next) ?? ''
		}

		@ $mol_mem
		auto_create() {
			console.log('auto create')
			if (this.thesis().edition()) return

			const edition = this.domain().edition( $mol_guid() )
			this.thesis().edition(edition)
		}

		save() {
			if (!this.thesis().draft()) return

			this.thesis().draft(false)
			this.thesis().moment( new $mol_time_moment )
			this.thesis().creator( this.domain().user() )

			this.domain().index().update('', this.content(), this.thesis().id())

			this.$.$mol_state_arg.value('thesis', this.thesis().id())
			this.$.$mol_state_arg.value('thesis_new', null)
		}

		page_title() {
			return !this.content().length ? super.page_title() : this.content().split('\n')[0].trim()
		}

		auto() {
			this.auto_create()
		}

	}

}
