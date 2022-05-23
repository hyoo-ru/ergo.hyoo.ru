namespace $ {

	export type $hyoo_ergo_proposal_status = 'opened' | 'completed' | 'closed'

	export type $hyoo_ergo_proposal_type = 'none' | 'text' | 'split' | 'merge' | 'delete' | 'sub'

	export class $hyoo_ergo_proposal extends $mol_object2 {

		id(): string {
			throw new Error('Not defined')
		}

		domain(): $hyoo_ergo_domain {
			throw new Error('Not defined')
		}

		state() {
			return this.domain().state().doc('hyoo_ergo_proposal').doc(this.id())
		}

		status(next?: $hyoo_ergo_proposal_status) {
			const str = this.state().sub('status').value(next) ?? 'opened'
			return (str as typeof next)!
		}

		type(next?: $hyoo_ergo_proposal_type) {
			const res = this.state().sub('type').value(next)
			return (res as $hyoo_ergo_proposal_type)!
		}

		comments(next?: $hyoo_ergo_comment[]) {
			const ids = this.state().sub('comments').list(next && next.map( obj => obj.id() )) 
			return ids.map( id => this.domain().comment( String(id) ) )
		}

		changed_text(next?: string) {
			return this.state().sub('changed_text').text(next)
		}

		changed_title(next?: string) {
			return this.state().sub('changed_title').text(next)
		}

		creator(next?: $hyoo_ergo_person) {
			const id = this.state().sub('creator').value(next && next.id())
			if(!id) throw new Error('Creator is required')
			return this.domain().person( String(id) )
		}

		moment(next?: $mol_time_moment) {
			const str = this.state().sub('moment').value(next && next.toString())
			if (!str) throw new Error('Moment is required')
			return new $mol_time_moment( String(str) )
		}

		thesis(next?: $hyoo_ergo_thesis) {
			const id = this.state().sub('thesis').value(next && next.id())
			if (!id) throw new Error('Thesis is required')
			return this.domain().thesis().item(String(id))
		}

		edition(next?: $hyoo_ergo_edition) {
			const id = this.state().sub('edition').value(next && next.id())
			if (!id) throw new Error('Edition is required')
			return this.domain().edition().item(String(id))
		}

	}

}
