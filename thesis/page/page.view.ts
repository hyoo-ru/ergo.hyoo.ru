namespace $.$$ {

	export class $hyoo_ergo_thesis_page extends $.$hyoo_ergo_thesis_page {

		thesis_id() {
			return this.thesis().id()
		}

		thesis_title() {
			return this.thesis().edition().title()
		}

		thesis_text() {
			return this.thesis().edition().text()
		}

	}

}
