namespace $.$$ {

	export class $hyoo_ergo_proposal_page extends $.$hyoo_ergo_proposal_page {

		thesis() {
			return this.proposal().thesis()
		}

		edition() {
			return this.thesis().edition()
		}

		type() {
			return this.proposal().type()
		}

		comment() {
			return this.proposal().comments().slice(-1)[0].message()
		}

		form_fields() {
			return [
				this.Comment_field(),
				... this.type() === 'none' ? [ this.Changes_field() ] : [],
				... this.type() === 'text' || this.changes() === 'text' ? [ this.Title_field(), this.Text_field() ] : [],
			]
		}

		next_title(next?: string) {
			return next ?? this.type() === 'text' ? this.proposal().changed_title() : this.edition().title()
		}

		next_text(next?: string) {
			return next ?? this.type() === 'text' ? this.proposal().changed_text() : this.edition().text()
		} 

	}

}
