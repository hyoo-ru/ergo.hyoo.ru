namespace $.$$ {

	export class $hyoo_ergo_thesis_page extends $.$hyoo_ergo_thesis_page {

		thesis_title() {
			return this.edition_last_content().split('\n')[0].trim()
		}

		thesis_id() {
			return this.thesis().id()
		}

		edition_last_content() {
			const edition = this.thesis().edition()
			if (!edition) return super.edition_last_content()
			return edition.content() || '...'
		}

	}

}
