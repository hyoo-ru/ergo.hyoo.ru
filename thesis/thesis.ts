namespace $ {

	export class $hyoo_ergo_thesis_service extends $mol_object2 {

		domain(): $hyoo_ergo_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem_key
		item(id: string) {
			const obj = new this.$.$hyoo_ergo_thesis
			obj.id = $mol_const(id)
			obj.domain = $mol_const(this.domain())
			return obj
		}

		@ $mol_action
		create(text: string) {
			const thesis = this.item( $mol_guid() )
			const edition = this.domain().edition().create(text)
			const request = this.domain().request().create('create', 'accepted')

			request.edition(edition)
			request.thesis(thesis)
			request.message('🔥')

			edition.request(request)

			thesis.moment(new $mol_time_moment)
			thesis.creator(this.domain().user())
			thesis.edition(edition)
			thesis.requests([request])

			this.domain().index().update('', text, thesis.id())

			return thesis
		}

	}

	export class $hyoo_ergo_thesis extends $mol_object2 {

		id(): string {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		domain(): $hyoo_ergo_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem
		state() {
			return this.domain().state().doc( 'hyoo_ergo_thesis' ).doc( this.id() )
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

		edition(next?: $hyoo_ergo_edition) {
			const id = this.state().sub('edition').value(next && next.id())
			if (!id) throw new Error('Edition is required')
			return this.domain().edition().item( String(id) )
		}

		requests(next?: $hyoo_ergo_request[]) {
			const ids = this.state().sub('requests').list(next && next.map( obj => obj.id() ))
			return ids.map( id => this.domain().request().item( String(id) ) )
		}

	}

}
