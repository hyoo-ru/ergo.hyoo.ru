namespace $ {

	export type $hyoo_ergo_request_status = 'draft' | 'review' | 'accepted' | 'rejected'
	export type $hyoo_ergo_request_type = 'create' | 'change' | 'split' | 'join'

	export class $hyoo_ergo_request_service extends $mol_object2 {

		domain(): $hyoo_ergo_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem_key
		item(id: string) {
			const obj = new this.$.$hyoo_ergo_request
			obj.id = $mol_const(id)
			obj.domain = $mol_const(this.domain())
			return obj
		}

		@ $mol_action
		create(type: $hyoo_ergo_request_type, status: $hyoo_ergo_request_status) {
			const request = this.item( $mol_guid() )

			request.status(status)
			request.type(type)
			request.creator(this.domain().user())
			request.moment(new $mol_time_moment)

			return request
		}

		@ $mol_action
		publish_change(thesis: $hyoo_ergo_thesis, text: string, message: string) {
			const edition = this.domain().edition().create(text)
			const request = this.create('change', 'review')

			edition.request(request)
			request.edition(edition)
			request.message(message)

			thesis.requests( [...thesis.requests(), request] )

			return request
		}

	}

	export class $hyoo_ergo_request extends $mol_object2 {

		id(): string {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		domain(): $hyoo_ergo_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem
		state() {
			return this.domain().state().doc( 'hyoo_ergo_request' ).doc( this.id() )
		}

		moment(next?: $mol_time_moment) {
			const str = this.state().sub('moment').value( next && next.toString() )
			if (!str) throw new Error('Moment is required')
			return new $mol_time_moment( String(str) )
		}

		creator(next?: $hyoo_ergo_person) {
			const id = this.state().sub('person').value(next && next.id())
			if (!id) throw new Error('Person is required')
			return this.domain().person( String(id) )
		}

		thesis(next?: $hyoo_ergo_thesis) {
			const id = this.state().sub('thesis').value(next && next.id())
			if (!id) throw new Error('Thesis is required')
			return this.domain().thesis().item( String(id) )
		}

		edition(next?: $hyoo_ergo_edition) {
			const id = this.state().sub('edition').value(next && next.id())
			if (!id) throw new Error('Edition is required')
			return this.domain().edition().item( String(id) )
		}

		message(next?: string) {
			return this.state().sub('message').text(next)
		}

		comments(next?: $hyoo_ergo_comment[]) {
			const ids = this.state().sub('comments').list(next && next.map( obj => obj.id() ))
			return ids.map( id => this.domain().comment( String(id) ) )
		}

		status(next?: $hyoo_ergo_request_status) {
			const status = this.state().sub('status').value(next) ?? 'review'
			return (status as typeof next)!
		}

		type(next?: $hyoo_ergo_request_type) {
			const type = this.state().sub('type').value(next) ?? 'change'
			return (type as typeof next)!
		}

	}

}
