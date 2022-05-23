namespace $.$$ {

	export class $hyoo_ergo_proposal_new extends $.$hyoo_ergo_proposal_new {

		thesis_id() {
			return this.thesis().id()
		}

		comment_bid() {
			return this.comment().length === 0 ? this.message().required : ''
		}

		title_bid() {
			return this.changes() === 'text'
				&& this.next_title().length === 0 ? this.message().required : ''
		}

		text_bid() {
			return this.changes() === 'text' 
				&& this.next_text().length === 0 ? this.message().required : ''
		}

		@ $mol_mem
		next_title(next?: string) {
			return next ?? this.thesis().edition().title()
		}

		@ $mol_mem
		next_text(next?: string) {
			return next ?? this.thesis().edition().text()
		}

		publish_enabled() {
			return !(this.text_bid() || this.title_bid() || this.comment_bid())
		}

		publish() {
			const obj = new this.$.$hyoo_ergo_proposal
			obj.id = $mol_const($mol_guid())
			obj.domain = $mol_const(this.domain())
			obj.moment(new $mol_time_moment)
			obj.creator(this.domain().user())
			obj.status('opened')

			const comment = this.domain().comment($mol_guid())
			comment.message(this.comment())
			comment.moment(new $mol_time_moment)
			comment.creator(this.domain().user())
			obj.comments([...obj.comments(), comment])

			obj.thesis(this.thesis())
			obj.type(this.changes() as $hyoo_ergo_proposal_type)
			obj.changed_text(this.next_text())
			obj.changed_title(this.next_title())

			this.thesis().proposals( [...this.thesis().proposals(), obj] )
			this.$.$mol_state_arg.value('proposal_new', null)
		}

		form_fields() {
			return [
				this.Comment_field(),
				this.Changes_field(),
				... this.changes() === 'text' ? [this.Title_field(), this.Text_field()] : [],
			]
		}

	}

}
